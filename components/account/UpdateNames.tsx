import React, { useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import updateNames from '../../actions/account/update-names'
import useAuth from '../../context/auth'
import ErrorAlert from '../shared/ErrorAlert'
import SucccessAlert from '../shared/SuccessAlert'

const Styles = styled.div`
  .button {
    margin: 15px 0;
  }
`

export default function UpdateNames() {
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
      <div>Update Names</div>
      <div>
        <input
          placeholder="First name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        {inputsError.firstName && <ErrorAlert error={inputsError.firstName} />}
        <input placeholder="Last name" name="lastName" value={lastName} onChange={handleChange} />
        {inputsError.lastName && <ErrorAlert error={inputsError.lastName} />}
        {isSuccess && data && <SucccessAlert message={data as string} />}
        <div className="button">
          {isLoading ? <div>Updating Names</div> : <div onClick={handleSubmit}>Update Name</div>}
        </div>
      </div>
    </Styles>
  )
}
