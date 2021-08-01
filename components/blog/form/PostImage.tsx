import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import CustomInputContainer from './../../forms/CustomInputContainer'
import ImagePicker from './../../forms/ImagePicker'
import InputField from './../../forms/InputField'

const ImageDetailsControl = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
`

export default function PostImage({
  image,
  setImage,
  blogImageCaption,
  handleChange,
  blogImageSource,
  blogImageCaptionError,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomInputContainer title="Blog Image" isRequired value={image.url}>
            <ImagePicker image={image} setImageCallback={setImage} destination="postImages" />
          </CustomInputContainer>
        </Grid>
        {image.url && (
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <ImageDetailsControl>
              <InputField
                title="Blog Image Title"
                name="blogImageCaption"
                label="blogImageCaption"
                value={blogImageCaption}
                onChange={(e) => handleChange(e)}
                placeholder="Blog Image Source"
                error={blogImageCaptionError}
              />
            </ImageDetailsControl>
            <ImageDetailsControl>
              <InputField
                title="Blog Image Source"
                name="blogImageSource"
                label="blogImageSource"
                value={blogImageSource}
                onChange={(e) => handleChange(e)}
                placeholder="Blog Image Source"
              />
            </ImageDetailsControl>
          </Grid>
        )}
      </Grid>
    </>
  )
}
