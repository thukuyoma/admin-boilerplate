import React from 'react'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import DisplayInputError from './DisplayInputError'
import styled from 'styled-components'

const Styles = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  select {
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: inherit;
    width: 100%;
    height: 45px;
    padding: 10px;
    background: inherit;

    ::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #c7c7c7;
    }
    :focus {
      border-color: #0098db;
      outline: none;
    }
  }
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2a2828;
    margin-bottom: 15px;
  }
  option {
    font-size: 16px;
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
  placeholder,
  isRequired,
}: {
  name: string
  error?: string
  options: Array<string>
  label: string
  title: string
  value: string
  onChange: Function
  placeholder?: string
  isRequired?: boolean
}) {
  const handleChange = (e) => {
    onChange(e)
  }
  return (
    <Styles>
      <label htmlFor={label}>
        {capitalizeFirstLetter(title)}{' '}
        {isRequired && <span style={{ color: value.length ? '#4cd964' : 'red' }}>*</span>}
      </label>
      <select
        name={name}
        value={capitalizeFirstLetter(value)}
        onChange={(e) => handleChange(e)}
        style={{ borderColor: error && 'red' }}
      >
        {placeholder && <option value="">{capitalizeFirstLetter(placeholder)}</option>}
        {Array.isArray(options) &&
          options.length &&
          options.map((option) => (
            <option key={option} value={option}>
              {capitalizeFirstLetter(option)}
            </option>
          ))}
      </select>
      {}
    </Styles>
  )
}
