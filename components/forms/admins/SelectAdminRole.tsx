import React from 'react'
import Select from 'react-select'
import { Control, customReactSelectStyles, InputTitle } from '../form-styles'

export default function SelectAdminRole({ role, setRole }) {
  const options = [
    { value: 'super', label: 'super' },
    { value: 'master', label: 'Master' },
    { value: 'editor', label: 'Editor' },
    { value: 'support', label: 'Support' },
    { value: 'marketer', label: 'Marketer' },
    { value: 'developer', label: 'Developer' },
  ]

  const handleChange = (selectedOption) => {
    setRole(selectedOption.value)
  }
  return (
    <Control>
      <InputTitle>Role</InputTitle>
      <div>
        <Select
          styles={customReactSelectStyles('inputErrors.role')}
          options={options.length && options}
          onChange={handleChange}
          placeholder={role ? role : 'Select Role'}
        />
      </div>
    </Control>
  )
}
