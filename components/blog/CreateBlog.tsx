import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import writePost from '../../actions/post/write-post'
import useLocalStorage from '../../hooks/useLocalStorage'
import Category from './form/Category'
import Button from '../buttons/Button'
import styled from 'styled-components'
import InputErrorsSummary from '../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import InputField from '../forms/InputField'
import postValidation from '../../validations/post-validation'
import PostBody from './form/PostBody'
import PostImage from './form/PostImage'
import Tags from './form/Tags'

const Spacer = styled.div`
  margin-bottom: 100px;
`

export default function CreateBlog() {
  const router = useRouter()
  const [blogValues, setBlogValues] = useLocalStorage('blogValues', {
    blogTitle: '',
    blogCategory: '',
    blogDescription: '',
    blogImageCaption: '',
    blogImageSource: '',
  })
  const [blogTags, setBlogTags] = useLocalStorage('blogTags', [])
  const [blogImage, setBlogImage] = useLocalStorage('blogImage', { url: '', publicId: '' })
  const [blogPostBody, setBlogPostBody] = useLocalStorage('blogPostBody', '')
  const [blogInputErrors, setBlogInputErrors] = useLocalStorage('blogInputErrors', {
    blogTitle: '',
    blogDescription: '',
    blogImageCaption: '',
    blogImage: '',
    blogCategory: '',
    blogPostBody: '',
  })
  const { blogTitle, blogCategory, blogDescription, blogImageSource, blogImageCaption } = blogValues
  const values = {
    title: blogTitle,
    description: blogDescription,
    tags: blogTags,
    image: { ...blogImage, source: blogImageSource, caption: blogImageCaption },
    category: blogCategory,
    postBody: blogPostBody,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(writePost)

  useEffect(() => {
    if (!blogImage.url && !blogImage.publicId) {
      setBlogValues({ ...blogValues, blogImageCaption: '', blogImageSource: '' })
    }
  }, [blogImage.url])

  const handleSetBody = (bodyContent: string) => {
    setBlogInputErrors({ ...blogInputErrors, blogPostBody: '' })
    setBlogPostBody(bodyContent)
  }

  const handleChange = (e) => {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value })
    setBlogInputErrors({ ...blogInputErrors, [e.target.name]: '' })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = postValidation({
      blogTitle,
      blogDescription,
      blogImageCaption,
      blogImage,
      blogCategory,
      blogPostBody,
    })
    if (validationResult.isError) {
      setBlogInputErrors(validationResult.errors)
      return null
    }
    await mutateAsync(values, {
      onError: (resError: object) => {
        setBlogInputErrors({ ...blogInputErrors, ...resError })
      },
      onSuccess: (postSlug) => {
        const itemsToRemoveFromLocalStorage = [
          'blogTags',
          'blogImage',
          'blogPostBody',
          'blogValues',
          'blogInputErrors',
        ]
        itemsToRemoveFromLocalStorage.forEach((item) => localStorage.removeItem(item))
        toast.success('Post successfully created')
        router.push(`/blogs/${postSlug}`)
      },
    })
    return null
  }

  return (
    <BorderPaddingWrapper padding>
      <Spacer>
        <form encType="multipart/form-data">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <InputField
                title="Blog Title"
                label="blogTitle"
                name="blogTitle"
                value={blogTitle}
                placeholder="Blog Title"
                maxLength={100}
                onChange={(e) => handleChange(e)}
                error={blogInputErrors.blogTitle}
                isRequired
              />
            </Grid>
          </Grid>
          <InputField
            title="Blog Description"
            label="blogDescription"
            name="blogDescription"
            value={blogDescription}
            placeholder="Blog Description"
            error={blogInputErrors.blogDescription}
            onChange={(e) => handleChange(e)}
            isRequired
            maxLength={250}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Category
                category={blogCategory}
                handleChange={handleChange}
                error={blogInputErrors.blogCategory}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <Tags tags={blogTags.slice().reverse()} setTags={setBlogTags} />
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <PostImage
                image={blogImage}
                blogImageCaption={blogImageCaption}
                handleChange={handleChange}
                blogImageSource={blogImageSource}
                blogImageCaptionError={blogInputErrors.blogImageCaption}
                setImage={setBlogImage}
              />
            </Grid>
          </Grid>
          <Grid>
            <PostBody
              postBody={blogPostBody}
              inputErrors={blogInputErrors}
              handleSetBody={handleSetBody}
              isRequired
            />
          </Grid>
          <>
            {Object.values(blogInputErrors).filter((error) => error.length > 3).length ? (
              <InputErrorsSummary
                errors={Object.values(blogInputErrors).filter((error) => error.length > 3)}
              />
            ) : null}
          </>
          <Button
            block
            title="Create Post"
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
