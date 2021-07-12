import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { InputField, InputTitle, Must } from '../form-styles'
import DisplayInputError from '../DisplayInputError'
import ImagePicker from '../ImagePicker'

const ImageDetailsControl = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
`

export default function PostImage({
  image,
  setImage,
  imageCaption,
  setImageCaption,
  imageSource,
  setImageSource,
  setInputErrors,
  inputErrors,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <InputTitle>Post Image</InputTitle>
          <ImagePicker image={image} setImageCallback={setImage} />
        </Grid>
        {image.url && (
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <ImageDetailsControl>
              <InputTitle>
                Caption <Must>*</Must>
              </InputTitle>
              <InputField
                value={imageCaption}
                onChange={(e) => {
                  setInputErrors({ ...inputErrors, imageCaption: '' })
                  setImageCaption(e.target.value)
                }}
                placeholder="Post Image Caption"
                error={inputErrors.imageCaption}
              />
              {inputErrors.imageCaption && <DisplayInputError error={inputErrors.imageCaption} />}
            </ImageDetailsControl>
            <ImageDetailsControl>
              <InputTitle>Source</InputTitle>
              <InputField
                value={imageSource}
                onChange={(e) => setImageSource(e.target.value)}
                placeholder="Post Image Title"
              />
            </ImageDetailsControl>
          </Grid>
        )}
      </Grid>
      {}
    </>
  )
}
