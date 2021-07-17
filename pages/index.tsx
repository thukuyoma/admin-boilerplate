import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import useAuth from '../context/auth'
import { Control, InputField, InputTitle } from '../components/forms/form-styles'
import DisplayInputError from '../components/forms/DisplayInputError'
import Button from '../components/buttons/Button'
import styled from 'styled-components'
import loginValidation from '../validations/login-validation'
import ErrorAlert from '../components/shared/ErrorAlert'
interface LoginStateProps {
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

const Login: React.FC = () => {
  const { login } = useAuth()
  const [values, setValues] = useState<LoginStateProps>({ email: '', password: '' })
  const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(() => login(values))
  const [inputErrors, setInputErrors] = useState({
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
    const validation = loginValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    setInputErrors({
      email: '',
      password: '',
    })
    await mutateAsync()
  }

  if (isSuccess) {
    router.push('/analytics/dashboard')
  }

  return (
    <Styles>
      <form>
        <p className="account__tag">Login</p>
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
          title="Login"
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

export default Login
