import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import updateAvatar from '../../actions/account/update-avatar'
import useAuth from '../../context/auth'
import SuccessAlert from '../shared/SuccessAlert'
import ErrorAlert from '../shared/ErrorAlert'
import Button from '../buttons/Button'
import AccountTabTitle from './AccountTabTitle'
import ImagePicker from '../forms/ImagePicker'

const Styles = styled.div`
  .avatar__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export default function UpdateAvatar({ setSwitchCaseAccount }) {
  const [avatar, setAvatar] = useState({ url: '', publicId: '' })
  const { refreshProfile, profile } = useAuth()
  const { mutateAsync, data, isSuccess, isLoading, isError, error } = useMutation(updateAvatar)
  const handleUpload = async () => {
    await mutateAsync(avatar, {
      onSuccess: () => {
        refreshProfile()
      },
    })
  }

  useEffect(() => {
    setAvatar({
      url: profile?.avatar?.url || '',
      publicId: profile?.avatar?.publicId || '',
    })
    return () => {
      setAvatar({ url: '', publicId: '' })
    }
  })
  return (
    <Styles>
      <AccountTabTitle
        tabTitle="Update Profile Avatar"
        setSwitchCaseAccount={setSwitchCaseAccount}
      />
      <div className="avatar__wrapper">
        <ImagePicker image={avatar} setImageCallback={setAvatar} />
        {isError && <ErrorAlert error={error} />}
        {isSuccess && data && <SuccessAlert message="Profile Image Uploaded successfully" />}
        <Button
          title="Update Avatar"
          loading={isLoading}
          onClick={handleUpload}
          disabled={isLoading}
          align="center"
          block
          style={{ marginTop: 30 }}
          color="primary"
          size="medium"
          variant="filled"
        />
      </div>
    </Styles>
  )
}
