import { Grid } from '@material-ui/core'
import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { InputTitle } from '../../forms/form-styles'
import ImagePicker from '../../forms/ImagePicker'

export default function ScholarshipImage({
  imageUrl,
  setScholarshipImage,
  setInputErrors,
  inputErrors,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <InputTitle> Image</InputTitle>
          <ImagePicker
            marginBottom={5}
            marginRight={5}
            imageUrl={imageUrl}
            inputErrors={inputErrors}
            imageInputFieldName="scholarshipImage"
            setInputErrors={setInputErrors}
            setImageCallback={setScholarshipImage}
            height={100}
            width={100}
          />
        </Grid>
      </Grid>
      {inputErrors.scholarshipImage && <DisplayInputError error={inputErrors.scholarshipImage} />}
    </>
  )
}
