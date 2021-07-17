import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import useAuth from '../../context/auth'
import updateBio from '../../actions/account/update-bio'
import Button from '../buttons/Button'
import ErrorAlert from '../shared/ErrorAlert'
import SuccessAlert from '../shared/SuccessAlert'
import { TextArea } from '../forms/form-styles'
import AccountTabTitle from './AccountTabTitle'

export default function UpdateBio({ setSwitchCaseAccount }) {
  const { profile, refreshProfile } = useAuth()
  const { mutateAsync, isSuccess, isLoading, data } = useMutation(updateBio)
  const [bio, setBio] = useState(profile?.bio)
  const [bioError, setBioError] = useState<string>('')
  useEffect(() => {
    setBio(profile?.bio)
  }, [profile?.bio])
  const handleChange = (e) => {
    setBioError('')
    setBio(e.target.value)
  }
  const handleUpdateBio = async (e) => {
    e.preventDefault()
    if (!bio) {
      setBioError('You cannot update empty bio')
      return null
    }
    if (bio && bio.length > 150) {
      setBioError('Bio characters should not be greater than 150')
      return null
    }
    await mutateAsync(bio, {
      onSuccess: () => {
        refreshProfile()
      },
      onError: (err) => setBioError(err.toString()),
    })
    return null
  }
  return (
    <>
      <AccountTabTitle tabTitle="Update Profile Bio" setSwitchCaseAccount={setSwitchCaseAccount} />
      <TextArea placeholder="Write Bio here . . ." value={bio} onChange={handleChange} />
      {bioError && <ErrorAlert error={bioError} />}
      {isSuccess && <SuccessAlert message="Successfully updated account name(s)" />}
      <Button
        title={`${isLoading ? 'Updating' : 'Update'} Bio`}
        loading={isLoading}
        onClick={handleUpdateBio}
        disabled={isLoading}
        align="center"
        block
        style={{ marginTop: '10px' }}
        color="primary"
        size="medium"
        variant="filled"
      />
    </>
  )
}
