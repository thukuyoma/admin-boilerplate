import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function WhoCanApply({ whoCanApply, setWhoCanApply, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, whoCanApply: '' }))
    setWhoCanApply(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Who can apply <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.whoCanApply}
        placeholder="Who can apply"
        value={whoCanApply}
        onChange={handleChange}
      />
      {inputErrors.whoCanApply && <DisplayInputError error={inputErrors.whoCanApply} />}
    </Control>
  )
}
