import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import {
  AddImageIcon,
  AddImageText,
  ChangeImageButton,
  ChangeImageButtonIcon,
  ImageDetailsControl,
  ImagePreview,
  ImageWrapper,
  InputField,
  InputTitle,
  RemoveImageButton,
  RemoveImageButtonIcon,
} from '../form-styles'
import getArrayLastItem from '../../../utils/get-array-last-item'
import { IoMdRemove } from 'react-icons/io'
import DisplayInputError from '../DisplayInputError'

export default function BookingImage({ imageUrl, setBookingImage, setInputErrors, inputErrors }) {
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string>(() => {
    if (imageUrl) {
      return imageUrl
    }
    return ''
  })

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const imageFormat = ['png', 'jpg', 'jpeg']
      const rawImageFormat = getArrayLastItem(e.target.files[0].name.split('.')).toLowerCase()
      if (!imageFormat.includes(rawImageFormat)) {
        setInputErrors({
          ...inputErrors,
          bookingImage: `Only JPG, JPEG, and PNG images are accepted, you provided a .${rawImageFormat} image`,
        })
        return null
      }
      setPreview(URL.createObjectURL(e.target.files[0]))
      setBookingImage(e.target.files[0])
      setInputErrors({ ...inputErrors, bookingImage: '' })
      return null
    }
    return null
  }

  const handleRemoveImage = () => {
    setPreview('')
    setBookingImage('')
    setInputErrors({ ...inputErrors, bookingImage: '' })
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <InputTitle>Booking Image</InputTitle>
          {preview ? (
            <>
              <ImagePreview
                src={preview}
                alt="Booking image"
                onKeyPress={() => imageInputRef.current.click()}
                onClick={() => imageInputRef.current.click()}
              />
              <InputField
                type="file"
                onChange={handleFileChange}
                ref={imageInputRef}
                style={{ display: 'none' }}
                name="bookingImage"
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <ChangeImageButton
                    onKeyPress={() => imageInputRef.current.click()}
                    onClick={() => imageInputRef.current.click()}
                    tabIndex={0}
                  >
                    <ChangeImageButtonIcon>
                      <CgArrowsExchangeAlt />
                    </ChangeImageButtonIcon>
                    Change Image
                  </ChangeImageButton>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <RemoveImageButton onKeyPress={handleRemoveImage} onClick={handleRemoveImage}>
                    <RemoveImageButtonIcon>
                      <IoMdRemove />
                    </RemoveImageButtonIcon>
                    Remove Image
                  </RemoveImageButton>
                </Grid>
              </Grid>
            </>
          ) : (
            <ImageWrapper
              onKeyPress={() => imageInputRef.current.click()}
              onClick={() => imageInputRef.current.click()}
            >
              <AddImageIcon>
                <RiAddLine />
              </AddImageIcon>
              <AddImageText>Add Image</AddImageText>
              <InputField
                type="file"
                onChange={handleFileChange}
                ref={imageInputRef}
                style={{ display: 'none' }}
                name="bookingImage"
              />
            </ImageWrapper>
          )}
        </Grid>
      </Grid>
      {inputErrors.bookingImage && <DisplayInputError error={inputErrors.bookingImage} />}
    </>
  )
}
