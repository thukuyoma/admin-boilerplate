import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import styled from 'styled-components'
import { InputField, InputTitle, Must } from '../form-styles'
import getArrayLastItem from '../../../utils/get-array-last-item'
import { IoMdRemove } from 'react-icons/io'
import DisplayInputError from '../InputError'

const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #dae9fc;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const AddImageIcon = styled.div`
  font-size: 20px;
`
const AddImageText = styled.p`
  margin: 0;
  font-size: 14px;
`
const ChangeImageButton = styled.div`
  width: 100%;
  background: #9d9d9d;
  border-radius: 3px;
  height: 39px;
  border: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    background: #d6d6d6;
  }
`

const ChangeImageButtonIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 20px;
  flex-shrink: 0;
`

const ImageDetailsControl = styled.div`
  margin-bottom: 20px;
`

const ImagePreview = styled.img`
  width: 100%;
  height: 132px;
  cursor: pointer;
`

const RemoveImageButton = styled(ChangeImageButton)`
  // margin-left: 10px;
`
const RemoveImageButtonIcon = styled(ChangeImageButtonIcon)``

export default function PostImage({
  imageUrl,
  setImage,
  imageCaption,
  setImageCaption,
  imageSource,
  setImageSource,
  setInputErrors,
  inputErrors,
}) {
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
          image: `Only JPG, JPEG, and PNG images are accepted, you provided a .${rawImageFormat} image`,
        })
        return null
      }
      setInputErrors({
        ...inputErrors,
        image: '',
        imageCaption: '',
      })
      setPreview(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
      return null
    }
    return null
  }

  const handleRemoveImage = () => {
    setImageCaption('')
    setImageSource('')
    setPreview('')
    setImage('')
    setInputErrors({ ...inputErrors, imageCaption: '', image: '', imageSource: '' })
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={preview ? 6 : 12} md={preview ? 6 : 12} lg={preview ? 6 : 12}>
          <InputTitle>Post Image</InputTitle>
          {preview ? (
            <>
              <ImagePreview
                src={preview}
                alt="post image"
                onKeyPress={() => imageInputRef.current.click()}
                onClick={() => imageInputRef.current.click()}
              />
              <RemoveImageButton onKeyPress={handleRemoveImage} onClick={handleRemoveImage}>
                <RemoveImageButtonIcon>
                  <IoMdRemove />
                </RemoveImageButtonIcon>
                Remove Image
              </RemoveImageButton>
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
                name="postImage"
              />
            </ImageWrapper>
          )}
        </Grid>
        {preview && (
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
                name="postImage"
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
            <InputField
              type="file"
              onChange={handleFileChange}
              ref={imageInputRef}
              style={{ display: 'none' }}
              name="postImage"
            />
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
        )}
      </Grid>
      {inputErrors.image && <DisplayInputError error={inputErrors.image} />}
    </>
  )
}
