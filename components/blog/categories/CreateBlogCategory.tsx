import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../../hooks/useLocalStorage'
import Button from '../../buttons/Button'
import styled from 'styled-components'
import InputErrorsSummary from '../../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'
import ImagePicker from '../../forms/ImagePicker'
import blogCategoryValidation from '../../../utils/blog-category-validation'
import createCategory from '../../../actions/post/categories/create-category'
import TItle from './form/TItle'
import Description from './form/Description'
import { Control, InputTitle, Must } from '../../forms/form-styles'

const Spacer = styled.div`
  margin-bottom: 100px;
`
export default function CreateBlogCategory() {
  const router = useRouter()
  const [title, setTitle] = useLocalStorage('title', '')
  const [image, setImage] = useLocalStorage('image', { url: '', publicId: '' })
  const [description, setDescription] = useLocalStorage('description', '')
  const [inputErrors, setInputErrors] = useLocalStorage('inputErrors', {
    title: '',
    description: '',
  })
  const values = {
    title,
    description,
    image: image,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(createCategory)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = blogCategoryValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    await mutateAsync(values, {
      onError: (resError: object) => {
        setInputErrors({ ...inputErrors, ...resError })
      },
      onSuccess: (categoryTitle) => {
        Object.keys(values).forEach((value) => localStorage.removeItem(value))
        localStorage.removeItem('inputErrors')
        toast.success('Category successfully created')
        router.push(`/blogs/categories/${categoryTitle}`)
      },
    })
    return null
  }

  return (
    <BorderPaddingWrapper padding>
      <Spacer>
        <form encType="multipart/form-data">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <TItle
                title={title}
                setTitle={setTitle}
                inputErrors={inputErrors}
                setInputErrors={setInputErrors}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Control>
                <InputTitle>
                  Image <Must>*</Must>
                </InputTitle>
                <ImagePicker
                  destination="blogCategoryImage"
                  image={image}
                  setImageCallback={setImage}
                />
              </Control>
            </Grid>
          </Grid>
          <Description
            description={description}
            setDescription={setDescription}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
          <>
            {Object.values(inputErrors).filter((error) => error.length > 3).length ? (
              <InputErrorsSummary
                errors={Object.values(inputErrors).filter((error) => error.length > 3)}
              />
            ) : null}
          </>
          <Button
            block
            title="Create Category"
            onClick={handleSubmit}
            loading={isLoading}
            align="center"
            disabled={isLoading || isSuccess}
            size="medium"
            variant="filled"
            color="primary"
          />
        </form>
      </Spacer>
    </BorderPaddingWrapper>
  )
}
