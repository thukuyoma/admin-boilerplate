import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import writePost from '../../actions/post/write-post'
import useLocalStorage from '../../hooks/useLocalStorage'
import getFormData from '../../utils/get-form-data'
import postValidator from '../../utils/post-validator'
import Category from '../forms/blog/Category'
import Description from '../forms/blog/Description'
import PostBody from '../forms/blog/PostBody'
import PostImage from '../forms/blog/PostImage'
import Tags from '../forms/blog/Tags'
import TItle from '../forms/blog/TItle'

export default function CreateBlog() {
  const router = useRouter()
  const { mutateAsync, isSuccess, isLoading, isError, error, data } = useMutation(writePost)
  const [title, setTitle] = useLocalStorage('title', '')
  const [tags, setTags] = useLocalStorage('tags', [])
  const [imageCaption, setImageCaption] = useLocalStorage('imageCaption', '')
  const [imageSource, setImageSource] = useLocalStorage('imageSource', '')
  const [image, setImage] = useState<File | Blob | string>('')
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

  const handleSetBody = (bodyContent: string) => {
    setInputErrors({ ...inputErrors, postBody: '' })
    setPostBody(bodyContent)
  }
  const handleSubmit = (e) => {
    const values = {
      title,
      description,
      tags,
      image,
      imageCaption,
      imageSource,
      category,
      postBody,
    }
    e.preventDefault()
    const validationResult = postValidator(values)
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    const postForm = getFormData(values)
    console.log({ postForm })
    // await mutateAsync(postForm)
    // return null
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TItle
            title={title}
            setTitle={setTitle}
            inputError={inputErrors}
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
            setCategory={setCategory}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Tags tags={tags} setTags={setTags} />
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <PostImage
            image={image}
            imageUrl=""
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
