import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import Loader from 'react-loader-spinner'
import loginValidator from '../utils/login-validator'
import useAuth from '../context/auth'
import { Control, InputField } from '../components/forms/form-styles'
import { RiErrorWarningLine } from 'react-icons/ri'
import DisplayInputError from '../components/forms/DisplayInputError'
import Analytics from '../components/dashboard/Analytics'

interface LoginStateProps {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login } = useAuth()
  const [values, setValues] = useState<LoginStateProps>({ email: '', password: '' })
  const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(() => login(values))
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isError) {
      setErrors((prev) => ({
        ...prev,
        ...(error as Record<string, unknown>),
      }))
    }
  }, [isError, error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errorItems = loginValidator(values)
    if (errorItems.email || errorItems.password) {
      setErrors({ ...errorItems })
    } else {
      setErrors({
        email: '',
        password: '',
      })
      await mutateAsync()
    }
  }

  if (isSuccess) {
    router.push('/blogs/edit')
  }

  return (
    <div>
      <div className="input__wrapper">
        <Analytics />
        <form>
          <Control>
            <InputField
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            {errors.email && <DisplayInputError error={errors.email} />}
          </Control>
          <Control>
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="on"
              error={errors.password}
            />
            {errors.password && <DisplayInputError error={errors.password} />}
          </Control>
        </form>

        <span className="tagline">
          Cant login contact
          <Link href="/register">
            <a>
              <strong> Support</strong>
            </a>
          </Link>
        </span>
        <div className="button__wrapper">
          {isLoading || isSuccess ? (
            <button>
              Login
              <Loader
                style={{ marginLeft: '5px', display: 'flex' }}
                type="Oval"
                width={15}
                height={15}
                size={20}
                color="#fff"
              />
            </button>
          ) : (
            <button onClick={handleSubmit}>Login</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
