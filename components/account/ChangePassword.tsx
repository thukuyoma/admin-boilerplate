import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-query'
import { InputField, InputTitle } from '../forms/form-styles'
import ErrorAlert from '../shared/ErrorAlert'
import changePassword from '../../actions/account/change-password'
import Button from '../buttons/Button'
import changePasswordValidation from '../../validations/change-password-validation'
import SuccessAlert from '../shared/SuccessAlert'
import AccountTabTitle from './AccountTabTitle'

const Styles = styled.div`
  .form__control {
    margin-bottom: 20px;
    width: 100%;
  }
`

export default function ChangePassword({ setSwitchCaseAccount }) {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(changePassword)
  const [inputsError, setInputErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const { oldPassword, newPassword, confirmNewPassword } = passwords
  const handleChange = (e) => {
    setInputErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }))
    setPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    const validation = changePasswordValidation({ oldPassword, newPassword, confirmNewPassword })
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    const passwordToUpdate = {
      oldPassword,
      newPassword,
    }
    await mutateAsync(passwordToUpdate, {
      onSuccess: () => {
        setPasswords({ oldPassword: '', newPassword: '', confirmNewPassword: '' })
      },
    })
    return null
  }

  return (
    <Styles>
      <div>
        <AccountTabTitle
          tabTitle="Change Account Password"
          setSwitchCaseAccount={setSwitchCaseAccount}
        />
        <div className="form__control">
          <InputTitle>Password</InputTitle>
          <InputField
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            name="oldPassword"
            onChange={handleChange}
          />
          {inputsError.oldPassword && <ErrorAlert error={inputsError.oldPassword} />}
        </div>
        <div className="form__control">
          <InputTitle>New Password</InputTitle>
          <InputField
            type="password"
            placeholder="New Password"
            value={newPassword}
            name="newPassword"
            onChange={handleChange}
          />
          {inputsError.newPassword && <ErrorAlert error={inputsError.newPassword} />}
        </div>
        <div className="form__control">
          <InputTitle>Change Password</InputTitle>
          <InputField
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            name="confirmNewPassword"
            onChange={handleChange}
          />
          {inputsError.confirmNewPassword && <ErrorAlert error={inputsError.confirmNewPassword} />}
        </div>
        {isError && <ErrorAlert error={error} />}
        {isSuccess && <SuccessAlert message="Password successfully updated" />}
        <Button
          title="Update Password"
          loading={isLoading}
          onClick={handleUpdatePassword}
          disabled={isLoading}
          align="center"
          block
          style={{ marginTop: '10px' }}
          color="primary"
          size="medium"
          variant="filled"
        />
      </div>
    </Styles>
  )
}
