import React, { useRef, useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import getArrayLastItem from '../../utils/get-array-last-item'

const Styles = styled.div`
  .preview__container {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
  }
  .preview__image {
    background: #dae9fc;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .image__wrapper {
    background: #dae9fc;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .image__add-text {
    margin: 0;
    font-size: 14px;
    text-align: center;
    padding: 0 5px;
    white-space: pre-wrap;
  }
  .image__add-icon {
    font-size: 20px;
  }
  .image__remove-button {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #0098db;
    border: 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: #fff;
    justify-content: center;
    cursor: pointer;
    margin-left: 5px;
    flex-shrink: 0;
    :hover {
      background-color: #33ade2;
    }
  }
  .image__remove-button--dummy {
    background-color: #f0f0f0;
    color: #b3b3b3;
    :hover {
      background-color: #b3b3b3;
      color: #f0f0f0;
    }
  }
`

export default function ImagePicker({
  imageUrl,
  setImageCallback,
  setInputErrors,
  inputErrors,
  height,
  width,
  marginBottom,
  marginTop,
  marginRight,
  marginLeft,
  buttonTitle,
  imageInputFieldName,
}: {
  imageUrl?: string
  setImageCallback: (value: object | string) => void
  setInputErrors: (value: object | string) => void
  inputErrors: object
  height: number
  width: number
  marginBottom?: number
  marginTop?: number
  marginRight?: number
  marginLeft?: number
  buttonTitle?: string
  imageInputFieldName: string
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
          [imageInputFieldName]: `Only JPG, JPEG, and PNG images are accepted, you provided a .${rawImageFormat} image`,
        })
        return null
      }
      setInputErrors({
        ...inputErrors,
        [imageInputFieldName]: '',
      })
      setPreview(URL.createObjectURL(e.target.files[0]))
      setImageCallback(e.target.files[0])
      return null
    }
    return null
  }

  const handleRemoveImage = () => {
    setPreview('')
    setImageCallback('')
    setInputErrors({ ...inputErrors, image: '' })
  }

  const marginStyles = {
    marginTop: marginTop ? `${marginTop}px` : '0px',
    marginRight: marginRight ? `${marginRight}px` : '0px',
    marginBottom: marginBottom ? `${marginBottom}px` : '0px',
    marginLeft: marginLeft ? `${marginLeft}px` : '0px',
  }
  return (
    <Styles>
      {preview ? (
        <div className="preview__container" style={marginStyles}>
          <img
            src={preview}
            alt="image"
            className="preview__image"
            onKeyPress={() => imageInputRef.current.click()}
            onClick={() => imageInputRef.current.click()}
            style={{
              width: width ? `${width}px` : '200px',
              height: height ? `${height}px` : '150px',
            }}
          />
          <input
            type="file"
            onChange={handleFileChange}
            ref={imageInputRef}
            style={{ display: 'none' }}
          />
          <button
            className="image__remove-button"
            onKeyPress={handleRemoveImage}
            onClick={handleRemoveImage}
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <div className="preview__container" style={marginStyles}>
          <div
            className="image__wrapper"
            onKeyPress={() => imageInputRef.current.click()}
            onClick={() => imageInputRef.current.click()}
            style={{
              width: width ? `${width}px` : '200px',
              height: height ? `${height}px` : '150px',
            }}
          >
            <div className="image__add-icon">
              <RiAddLine />
            </div>
            <div className="image__add-text">{buttonTitle ? buttonTitle : 'Add Image'}</div>
            <input
              type="file"
              onChange={handleFileChange}
              ref={imageInputRef}
              style={{ display: 'none' }}
            />
          </div>
          <div className="image__remove-button image__remove-button--dummy">
            <MdClose />
          </div>
        </div>
      )}
    </Styles>
  )
}
