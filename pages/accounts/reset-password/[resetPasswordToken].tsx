import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import resetPassword from '../../../actions/account/reset-password'
import DisplayInputError from '../../../components/forms/DisplayInputError'
import { Control, InputTitle, InputField } from '../../../components/forms/form-styles'
import ErrorAlert from '../../../components/shared/ErrorAlert'
import { useAnalytics } from '../../../context/analytics'
import resetPasswordValidation from '../../../validations/reset-password-validation'
import Button from '../../../components/shared/Button'
import { toast } from 'react-toastify'
interface ResetPasswordI {
  newPassword: string
  confirmNewPassword: string
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

export default function ResetPasswordPage() {
  const { ip, device, weather } = useAnalytics()
  const [values, setValues] = useState<ResetPasswordI>({
    newPassword: '',
    confirmNewPassword: '',
  })
  const { mutateAsync, isLoading, isError, error } = useMutation(resetPassword)
  const [inputErrors, setInputErrors] = useState({
    newPassword: '',
    confirmNewPassword: '',
  })
  const router = useRouter()
  const { resetPasswordToken } = router.query
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
    const validation = resetPasswordValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    setInputErrors({
      newPassword: '',
      confirmNewPassword: '',
    })
    await mutateAsync(
      { token: resetPasswordToken, password: values.newPassword, ip, device },
      {
        onSuccess: (data) => {
          toast.success(data)
          router.push('/')
          return null
        },
        onError: (err) => {
          toast.error(err)
          router.push('/')
          return null
        },
      }
    )
  }

  return (
    <Styles>
      <form>
        <p className="account__tag">Reset Password</p>
        <Control>
          <InputTitle>New Password</InputTitle>
          <InputField
            type="password"
            placeholder="First name"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            error={inputErrors.newPassword}
          />
          {inputErrors.newPassword && <DisplayInputError error={inputErrors.newPassword} />}
        </Control>
        <Control>
          <InputTitle>Confirm Password</InputTitle>
          <InputField
            type="password"
            placeholder="Last name"
            name="confirmNewPassword"
            value={values.confirmNewPassword}
            onChange={handleChange}
            error={inputErrors.confirmNewPassword}
          />
          {inputErrors.confirmNewPassword && (
            <DisplayInputError error={inputErrors.confirmNewPassword} />
          )}
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
          title="Reset Password"
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
