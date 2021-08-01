import React, { useEffect, useRef, useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import getArrayLastItem from '../../utils/get-array-last-item'
import { useMutation } from 'react-query'
import fileUploader from '../../actions/cloud-assets/file-uploader'
import deleteCloudFile from '../../actions/cloud-assets/delete-cloud-file'
import Loader from '../shared/Loader'
import DisplayInputError from './DisplayInputError'
import config from '../../config/config'

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
    width: 100px;
    height: 100px;
  }
  .image__wrapper {
    background: #dae9fc;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 100px;
    height: 100px;
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
  .upload__progress {
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
    margin-top: 10px;
    font-size: 10px;
  }
  .image__side-button {
    display: flex;
    flex-direction: column;
  }
`

export default function ImagePicker({
  image,
  setImageCallback,
  buttonTitle,
  styles,
  destination,
  error,
}: {
  image?: { url: string; publicId: string }
  setImageCallback: (value: object | string) => void
  buttonTitle?: string
  styles?: { marginBottom?: number; marginTop?: number; marginRight?: number; marginLeft?: number }
  error?: string
  destination:
    | 'postImages'
    | 'accountAvatars'
    | 'bookingImage'
    | 'scholarshipImages'
    | 'blogCategoryImage'
}) {
  const { mutateAsync: uploadMutateAsync, isLoading: uploadIsLoading } = useMutation(fileUploader)
  const { mutateAsync: deleteMutateAsync, isLoading: deleteingIsLoading } = useMutation(
    deleteCloudFile
  )
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [uploadPercentage, setUploadPercentage] = useState(0)
  const [imageError, setImageError] = useState('')
  const [preview, setPreview] = useState(() => {
    if (image.url) {
      return image
    }
    return { url: '', publicId: '' }
  })
  const [file, setFile] = useState<File | Blob | string>('')
  useEffect(() => {
    if (image.url) {
      setPreview(image)
    }
  }, [image.url])

  const uploader = async () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', config.cloudinary.preset[destination])
    await uploadMutateAsync(
      { formData, setUploadPercentage },
      {
        onSuccess: (data) => {
          setPreview(data)
          setImageCallback(data)
        },
        onError: (err) => setImageError(err as string),
      }
    )
  }
  useEffect(() => {
    if (file) {
      uploader()
    }
  }, [file])

  const handleRemoveImage = async (e) => {
    if (!image.publicId && !image.url) return null
    e.preventDefault()
    await deleteMutateAsync(image.publicId, {
      onSuccess: () => {
        setPreview({ url: '', publicId: '' })
        setImageCallback({ url: '', publicId: '' })
      },
      onError: (err) => setImageError(err as string),
    })
    setImageError('')
    return
  }

  const handleFileChange = async (e) => {
    if (image.url && image.publicId) {
      await handleRemoveImage(e)
    }
    if (e.target.files.length) {
      const imageFormat = ['png', 'jpg', 'jpeg']
      const rawImageFormat = getArrayLastItem(e.target.files[0].name.split('.')).toLowerCase()
      if (!imageFormat.includes(rawImageFormat)) {
        setImageError(
          `Only JPG, JPEG, and PNG images are accepted, you provided a .${rawImageFormat} image`
        )
        return null
      }
      setFile(e.target.files[0])
      setImageError('')
      return null
    }
    return null
  }
  return (
    <Styles>
      {preview.url && preview.publicId ? (
        <div className="preview__container" style={styles}>
          <img
            src={preview.url}
            alt="image"
            className="preview__image"
            style={styles}
            onKeyPress={(e) => imageInputRef.current.click()}
            onClick={(e) => imageInputRef.current.click()}
          />
          <input
            type="file"
            onChange={handleFileChange}
            ref={imageInputRef}
            style={{ display: 'none' }}
            accept="image/png, image/jpeg, image/jpg"
          />
          <div className="image__side-button">
            <button
              className="image__remove-button"
              onKeyPress={handleRemoveImage}
              onClick={handleRemoveImage}
            >
              <MdClose />
            </button>
            {uploadPercentage || uploadIsLoading ? (
              <div className="upload__progress">{uploadPercentage}%</div>
            ) : null}
            {deleteingIsLoading ? (
              <div className="upload__progress">
                <Loader width={12} isLoading={deleteingIsLoading} />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="preview__container" style={styles}>
          <div
            className="image__wrapper"
            onKeyPress={() => imageInputRef.current.click()}
            onClick={() => imageInputRef.current.click()}
            style={styles}
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
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>
          <div className="image__side-button">
            <div className="image__remove-button image__remove-button--dummy">
              <MdClose />
            </div>
            {uploadPercentage || uploadIsLoading ? (
              <div className="upload__progress">{uploadPercentage}%</div>
            ) : null}
          </div>
        </div>
      )}
      {imageError || (error && <DisplayInputError error={imageError || error} />)}
    </Styles>
  )
}
