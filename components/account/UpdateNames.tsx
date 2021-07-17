import React, { useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import updateNames from '../../actions/account/update-names'
import useAuth from '../../context/auth'
import { InputField, InputTitle } from '../forms/form-styles'
import Button from '../buttons/Button'
import ErrorAlert from '../shared/ErrorAlert'
import SucccessAlert from '../shared/SuccessAlert'
import AccountTabTitle from './AccountTabTitle'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form__control {
    margin-bottom: 20px;
    width: 100%;
  }
`

export default function UpdateNames({ setSwitchCaseAccount }) {
  const { mutateAsync, isSuccess, data, isLoading } = useMutation(updateNames)
  const { profile, refreshProfile } = useAuth()
  const [values, setValues] = useState({
    lastName: profile && profile.lastName,
    firstName: profile && profile.firstName,
  })
  const [inputsError, setInputErrors] = useState({
    lastName: '',
    firstName: '',
  })
  const { lastName, firstName } = values
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async () => {
    if (!lastName) {
      setInputErrors((prev) => ({ ...prev, lastName: 'Last name is required' }))
    }
    if (!firstName) {
      setInputErrors((prev) => ({ ...prev, firstName: 'First name is required' }))
    }
    if (!firstName || !lastName) {
      return null
    }
    await mutateAsync(
      { firstName, lastName },
      {
        onSuccess: () => refreshProfile(),
      }
    )
    return null
  }

  return (
    <Styles>
      <AccountTabTitle
        tabTitle="Update Profile Names"
        setSwitchCaseAccount={setSwitchCaseAccount}
      />
      <div className="form__control">
        <InputTitle>First name</InputTitle>
        <InputField
          placeholder="First name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        {inputsError.firstName && <ErrorAlert error={inputsError.firstName} />}
      </div>
      <div className="form__control">
        <InputTitle>Last name</InputTitle>
        <InputField
          placeholder="Last name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        {inputsError.lastName && <ErrorAlert error={inputsError.lastName} />}
        {isSuccess && data && <SucccessAlert message="Successfully updated account name(s)" />}
      </div>
      <Button
        title={`${isLoading ? 'Updating' : 'Update'} Names`}
        loading={isLoading}
        onClick={handleSubmit}
        disabled={isLoading}
        align="center"
        block
        color="primary"
        size="medium"
        variant="filled"
      />
    </Styles>
  )
}
