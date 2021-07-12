import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { Control, InputField, InputTitle } from '../../components/forms/form-styles'
import DisplayInputError from '../../components/forms/DisplayInputError'
import Button from '../../components/shared/Button'
import styled from 'styled-components'
import ErrorAlert from '../../components/shared/ErrorAlert'
import registerValidation from '../../validations/register-validation'
import register from '../../actions/account/register'
import { Grid } from '@material-ui/core'

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
  const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(register)
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
        router.push('/blogs/edit')
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
            <Control>
              <InputTitle>First name</InputTitle>
              <InputField
                type="text"
                placeholder="First name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                error={inputErrors.firstName}
              />
              {inputErrors.firstName && <DisplayInputError error={inputErrors.firstName} />}
            </Control>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Control>
              <InputTitle>Last name</InputTitle>
              <InputField
                type="text"
                placeholder="Last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                error={inputErrors.lastName}
              />
              {inputErrors.lastName && <DisplayInputError error={inputErrors.lastName} />}
            </Control>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Control>
              <InputTitle>Email</InputTitle>
              <InputField
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={inputErrors.email}
              />
              {inputErrors.email && <DisplayInputError error={inputErrors.email} />}
            </Control>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Control>
              <InputTitle>Password</InputTitle>
              <InputField
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="on"
                error={inputErrors.password}
              />
              {inputErrors.password && <DisplayInputError error={inputErrors.password} />}
            </Control>
          </Grid>
        </Grid>
        {isError && <ErrorAlert error={error} />}
        <span className="tagline">
          Cant login contact
          <Link href="/register">
            <a>
              <strong> Support</strong>
            </a>
          </Link>
        </span>
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
