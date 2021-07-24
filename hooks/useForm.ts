import { useState } from 'react'

export default function useForm(callback, validation, initialState) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isMatch: '',
  })

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errorItems = validation(values)
    if (
      errorItems.email ||
      errorItems.password ||
      errorItems.confirmPassword ||
      errorItems.isMatch
    ) {
      setErrors({ ...errorItems })
    } else {
      await callback(values)
      setErrors({
        email: '',
        password: '',
        confirmPassword: '',
        isMatch: '',
      })
    }
  }
  return { handleChange, handleSubmit, values, errors }
}
