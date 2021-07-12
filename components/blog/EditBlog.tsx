import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import postValidator from '../../utils/post-validator'
import Category from '../forms/blog/Category'
import Description from '../forms/blog/Description'
import PostBody from '../forms/blog/PostBody'
import PostImage from '../forms/blog/PostImage'
import Tags from '../forms/blog/Tags'
import TItle from '../forms/blog/TItle'
import Button from '../shared/Button'
import styled from 'styled-components'
import editPost from '../../actions/post/edit-post'
import { toast } from 'react-toastify'

const Spacer = styled.div`
  margin-bottom: 100px;
`

export default function EditBlog({ blog }) {
  const router = useRouter()
  const [title, setTitle] = useLocalStorage('title', '')
  const [tags, setTags] = useLocalStorage('tags', [])
  const [imageCaption, setImageCaption] = useLocalStorage('imageCaption', '')
  const [imageSource, setImageSource] = useLocalStorage('imageSource', '')
  const [image, setImage] = useLocalStorage('image', { url: '', publicId: '' })
  const [category, setCategory] = useLocalStorage('category', '')
  const [postBody, setPostBody] = useLocalStorage('postBody', '')
  const [description, setDescription] = useLocalStorage('description', '')
  const [inputErrors, setInputErrors] = useLocalStorage('inputErrors', {
    title: '',
    description: '',
    imageCaption: '',
    image: '',
    category: '',
    postBody: '',
  })

  const values = {
    title,
    description,
    tags,
    image: {
      ...image,
      caption: imageCaption,
      source: imageSource,
    },
    postBody,
    category,
  }

  const { mutateAsync, isSuccess, isLoading } = useMutation(editPost)

  useEffect(() => {
    setTitle(blog?.title)
    setTags(blog.tags ? [...blog.tags] : [])
    setImageCaption(blog.image ? blog.image.caption : '')
    setImageSource(blog.image ? blog.image.source : '')
    setImage(
      blog.image
        ? { url: blog.image.url, publicId: blog.image.publicId }
        : { url: '', publicId: '' }
    )
    setCategory(blog?.category ? blog.category : '')
    setPostBody(blog?.postBody ? blog.postBody : '')
    setDescription(blog?.description ? blog.description : '')
  }, [])

  const handleSetBody = (bodyContent: string) => {
    setInputErrors({ ...inputErrors, postBody: '' })
    setPostBody(bodyContent)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = postValidator(values)
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    await mutateAsync(
      { formData: values, postId: blog._id },
      {
        onError: (resError: object) => {
          setInputErrors({ ...inputErrors, ...resError })
        },
        onSuccess: (postSlug) => {
          Object.keys({ ...values, imageCaption, imageSource }).forEach((formItem) =>
            localStorage.removeItem(formItem)
          )
          localStorage.removeItem('inputErrors')
          toast.success('Post successfully updated')
          router.push(`/blogs/${postSlug}`)
        },
      }
    )
    return null
  }

  return (
    <Spacer>
      <form encType="multipart/form-data">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TItle
              title={title}
              setTitle={setTitle}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
            />
          </Grid>
        </Grid>
        <Description
          description={description}
          setDescription={setDescription}
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Category
              category={category}
              setCategory={setCategory}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Tags tags={tags.slice().reverse()} setTags={setTags} />
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <PostImage
              image={image}
              imageCaption={imageCaption}
              setImageCaption={setImageCaption}
              imageSource={imageSource}
              setImageSource={setImageSource}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
              setImage={setImage}
            />
          </Grid>
        </Grid>
        <Grid>
          <PostBody postBody={postBody} inputErrors={inputErrors} handleSetBody={handleSetBody} />
        </Grid>
        <Button
          block
          title="Update Post"
          onClick={handleSubmit}
          loading={isLoading}
          disabled={isLoading || isSuccess}
          align="center"
          color="primary"
          size="medium"
          variant="filled"
        />
      </form>
    </Spacer>
  )
}
