import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../../hooks/useLocalStorage'
import Button from '../../buttons/Button'
import styled from 'styled-components'
import InputErrorsSummary from '../../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'
import ImagePicker from '../../forms/ImagePicker'
import Description from './form/Description'
import { Control } from '../../forms/form-styles'
import updateCategory from '../../../actions/post/categories/update-category'

const Spacer = styled.div`
  margin-bottom: 100px;
`
export default function EditBlogCategory({ category }) {
  const router = useRouter()
  const [image, setImage] = useLocalStorage('image', { url: '', publicId: '' })
  const [description, setDescription] = useLocalStorage('description', '')
  const [inputErrors, setInputErrors] = useLocalStorage('inputErrors', {
    description: '',
  })
  const values = {
    description,
    image: image,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(updateCategory)
  useEffect(() => {
    setDescription(category?.description ? category.description : '')
    setImage(
      category.image
        ? { url: category.image.url, publicId: category.image.publicId }
        : { url: '', publicId: '' }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!description) {
      setInputErrors({ description: 'Category description is required' })
      return null
    }
    if (description && description.length > 301) {
      setInputErrors({ description: 'Category description too long max 300 characters' })
      return null
    }
    await mutateAsync(
      { categoryTitle: category.title, values },
      {
        onError: (resError: object) => {
          setInputErrors({ ...inputErrors, ...resError })
        },
        onSuccess: (data) => {
          Object.keys(values).forEach((value) => localStorage.removeItem(value))
          localStorage.removeItem('inputErrors')
          toast.success(data)
          router.push(`/blogs/categories/${category.title}`)
        },
      }
    )
    return null
  }

  return (
    <BorderPaddingWrapper padding>
      <Spacer>
        <form encType="multipart/form-data">
          <Control>
            <ImagePicker
              image={image}
              setImageCallback={setImage}
              destination="blogCategoryImage"
            />
          </Control>
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
            title="Update Category"
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
