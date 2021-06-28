import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import { RiCameraSwitchLine } from 'react-icons/ri'
import updateAvatar from '../../actions/account/update-avatar'
import useAuth from '../../context/auth'
import SuccessAlert from '../shared/SuccessAlert'
import ErrorAlert from '../shared/ErrorAlert'
import Progress from './Progress'
import Button from '../shared/Button'
import AccountTabTitle from './AccountTabTitle'

const Styles = styled.div`
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 80px;
    background: gray;
    margin-bottom: 15px;
    position: relative;
    flex: 1 0 150px;
  }

  .image__holder {
    position: relative;
  }
  .image__icon {
    position: absolute;
    top: 44px;
    right: -13px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 20px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0098db;
    opacity: 1;
    margin: 5px;
    :hover {
      background: black;
      color: #fff;
    }
  }
  .preview__image {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }

  .default__avatar {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }
  .avatar-group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      p {
        text-align: center;
      }
    }
  }
`

export default function UpdateAvatar({ setSwitchCaseAccount }) {
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [uploadPercentage, setUploadPercentage] = useState(0)
  const { refreshProfile, profile } = useAuth()

  const { mutateAsync, data, isSuccess, isLoading, isError, error } = useMutation(updateAvatar)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const handleImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }
  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('avatar', image.raw)
    await mutateAsync(
      { formData, setUploadPercentage },
      {
        onSuccess: () => {
          refreshProfile()
        },
      }
    )
  }

  return (
    <Styles>
      <AccountTabTitle
        tabTitle="Update Profile Avatar"
        setSwitchCaseAccount={setSwitchCaseAccount}
      />
      <div className="avatar-group">
        {image.preview ? (
          <>
            <div className="image__holder">
              <img src={`${image.preview}`} alt="setup illustration" className="preview__image" />
              <div
                role="button"
                className="image__icon"
                onKeyPress={() => imageInputRef.current.click()}
                onClick={() => imageInputRef.current.click()}
              >
                <RiCameraSwitchLine />
              </div>
            </div>
            {uploadPercentage !== 0 && <Progress percentage={uploadPercentage} />}
          </>
        ) : (
          <>
            <img
              src={profile.avatar ? profile.avatar : '/assets/images/default__avatar__photo.jpg'}
              alt="avatar"
              className="default__avatar"
            />
          </>
        )}

        <div>
          <form encType="multipart/form-data">
            <input
              type="file"
              onChange={handleImage}
              ref={imageInputRef}
              style={{ display: 'none' }}
            />
          </form>
        </div>
        {isError && <ErrorAlert error={error} />}
        {isSuccess && data && <SuccessAlert message="Profile Image Uploaded successfully" />}
        {image.preview ? (
          <Button
            title={`${isLoading ? 'Updating' : 'Update'} Avatar`}
            loading={isLoading}
            onClick={handleUpload}
            disabled={isLoading}
            align="center"
            block
            style={{ marginTop: '30px' }}
          />
        ) : (
          <Button
            title="Choose Image"
            loading={isLoading}
            onClick={() => imageInputRef.current.click()}
            disabled={isLoading}
            align="center"
            block
            style={{ marginTop: '30px' }}
          />
        )}
      </div>
    </Styles>
  )
}
