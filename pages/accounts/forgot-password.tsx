import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { Control, InputField, InputTitle } from '../../components/forms/form-styles'
import DisplayInputError from '../../components/forms/DisplayInputError'
import Button from '../../components/shared/Button'
import styled from 'styled-components'
import ErrorAlert from '../../components/shared/ErrorAlert'
import forgotPassword from '../../actions/account/forgot-password'
import emailValidator from '../../utils/email-validator'
import { useAnalytics } from '../../context/analytics'
import SuccessAlert from '../../components/shared/SuccessAlert'

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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>('')
  const { device, ip } = useAnalytics()
  const { mutateAsync, isSuccess, data, isLoading, isError, error } = useMutation(forgotPassword)
  const [inputErrors, setInputErrors] = useState('')
  const router = useRouter()
  const handleChange = (e) => {
    setInputErrors('')
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (isError) {
      setInputErrors('')
    }
  }, [isError, error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      setInputErrors('Email address is required')
      return null
    }
    if (email && !emailValidator(email)) {
      setInputErrors('Email address is invalid')
      return null
    }
    await mutateAsync({ email, device, ip })
  }

  return (
    <Styles>
      <form>
        <p className="account__tag">Forgot password</p>
        <Control>
          <InputTitle>Email</InputTitle>
          <InputField
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            error={inputErrors}
          />
          {inputErrors && <DisplayInputError error={inputErrors} />}
        </Control>
        {isError && <ErrorAlert error={error} />}
        {isSuccess && <SuccessAlert message={data} />}
        <span className="tagline">
          Cant login contact
          <Link href="/register">
            <a>
              <strong>Support</strong>
            </a>
          </Link>
        </span>
        <Button
          block
          style={{ marginTop: '30px' }}
          title="Send Password Reset Link"
          onClick={(e) => handleSubmit(e)}
          loading={isLoading}
          align="center"
          disabled={isLoading}
        />
      </form>
    </Styles>
  )
}
