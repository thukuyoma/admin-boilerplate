import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function Organization({
  organization,
  setOrganization,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, organization: '' }))
    setOrganization(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Organization <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.organization}
        placeholder="Scholarship Organization"
        value={organization}
        onChange={handleChange}
      />
      {inputErrors.organization && <DisplayInputError error={inputErrors.organization} />}
    </Control>
  )
}
