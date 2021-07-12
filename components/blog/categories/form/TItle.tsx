import React from 'react'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputField, InputTitle, Must } from '../../../forms/form-styles'
import InputWordsCounter from '../../../forms/InputWordsCounter'
// import { Control, InputTitle, Must, InputField } from '../form-styles'
// import DisplayInputError from '../DisplayInputError'

export default function TItle({ title, setTitle, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, title: '' }))
    setTitle(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Title <InputWordsCounter words={title} max={3} isWord /> <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.title}
        placeholder="category"
        value={title}
        onChange={handleChange}
      />
      {inputErrors.title && <DisplayInputError error={inputErrors.title} />}
    </Control>
  )
}
