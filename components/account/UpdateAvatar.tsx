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
import image from 'next/image'

const Styles = styled.div`
  .avatar__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export default function UpdateAvatar({ setSwitchCaseAccount }) {
  const { refreshProfile, profile } = useAuth()
  const [avatar, setAvatar] = useState({
    url: profile?.avatar?.url || '',
    publicId: profile?.avatar?.publicId || '',
  })
  const { mutateAsync, data, isSuccess, isLoading, isError, error } = useMutation(updateAvatar)

  const handleUpload = async () => {
    await mutateAsync(avatar, {
      onSuccess: () => {
        refreshProfile()
      },
    })
  }

  return (
    <Styles>
      <AccountTabTitle
        tabTitle="Update Profile Avatar"
        setSwitchCaseAccount={setSwitchCaseAccount}
      />
      <div className="avatar__wrapper">
        <ImagePicker image={avatar} setImageCallback={setAvatar} destination="accountAvatars" />
        {isError && <ErrorAlert error={error} />}
        {isSuccess && data && <SuccessAlert message="Profile Image Uploaded successfully" />}
        {avatar.url && (
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
        )}
      </div>
    </Styles>
  )
}
