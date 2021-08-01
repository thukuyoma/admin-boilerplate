import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import DisplayInputError from '../../components/forms/DisplayInputError'
import Button from '../../components/buttons/Button'
import styled from 'styled-components'
import ErrorAlert from '../../components/shared/ErrorAlert'
import registerValidation from '../../validations/register-validation'
import register from '../../actions/account/register'
import { Grid } from '@material-ui/core'
import InputField from '../../components/forms/InputField'
import QuickLinks from '../../components/account/QuickLinks'

interface RegisterI {
  firstName: string
  lastName: string
  email: string
  password: string
}

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 10px;
  form {
    max-width: 500px;
    flex-shrink: 0;
    width: 100%;
    flex-grow: 1;
  }
  .account__tag {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 340px) {
    margin: 30px 0;
  }
`

export default function RegisterPage() {
  const [values, setValues] = useState<RegisterI>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const { mutateAsync, isLoading, isError, error } = useMutation(register)
  const [inputErrors, setInputErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const router = useRouter()
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isError) {
      setInputErrors((prev) => ({
        ...prev,
        ...(error as Record<string, unknown>),
      }))
    }
  }, [isError, error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = registerValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    setInputErrors({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })
    await mutateAsync(values, {
      onSuccess: () => {
        router.push('/')
        return null
      },
    })
  }

  return (
    <Styles>
      <form>
        <p className="account__tag">Register</p>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <InputField
              title="First name"
              type="text"
              placeholder="First name"
              name="firstName"
              label="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={inputErrors.firstName}
              isRequired
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              title="Last name"
              type="text"
              placeholder="Last name"
              name="lastName"
              label="lastName"
              isRequired
              value={values.lastName}
              onChange={handleChange}
              error={inputErrors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <InputField
              title="Email"
              label="email"
              type="text"
              placeholder="Email"
              name="email"
              isRequired
              value={values.email}
              onChange={handleChange}
              error={inputErrors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              title="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              label="password"
              isRequired
              error={inputErrors.password}
            />
            {inputErrors.password && <DisplayInputError error={inputErrors.password} />}
          </Grid>
        </Grid>
        {isError && <ErrorAlert error={error} />}
        <QuickLinks />
        <Button
          block
          style={{ marginTop: '30px' }}
          title="Register"
          onClick={(e) => handleSubmit(e)}
          loading={isLoading}
          align="center"
          disabled={isLoading}
          color="primary"
          size="medium"
          variant="filled"
        />
      </form>
    </Styles>
  )
}
