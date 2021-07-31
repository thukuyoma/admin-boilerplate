import React from 'react'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import DisplayInputError from './DisplayInputError'
import styled from 'styled-components'

const Styles = styled.div`
  margin-bottom: 20px;
  width: 100%;
  select {
    width: 100%;
  }
`
export default function InputSelect({
  name,
  error,
  options,
  label,
  title,
  onChange,
  value,
}: {
  name: string
  error?: string
  options: Array<string>
  label: string
  title: string
  value: string | number
  onChange: (e) => void | null
}) {
  return (
    <Styles>
      <label htmlFor={label}>{capitalizeFirstLetter(title)}</label>
      <select name={name} value={value} onChange={(e) => this.onchange(e)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <DisplayInputError error={error} />}
    </Styles>
  )
}
