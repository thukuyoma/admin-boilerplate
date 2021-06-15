import React from 'react'
import { Control, InputTitle, Must, InputField } from '../form-styles'
import DisplayInputError from '../InputError'

export default function TItle({ title, setTitle, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, title: '' }))
    setTitle(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Title <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.title}
        placeholder="Title of post"
        value={title}
        onChange={handleChange}
      />
      {inputErrors.title && <DisplayInputError error={inputErrors.title} />}
    </Control>
  )
}
