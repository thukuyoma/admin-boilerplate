import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import DisplayInputError from './DisplayInputError'

const Styles = styled.div`
  margin-bottom: 30px;
  width: 100%;
  .form__control {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #2a2828;
      margin-bottom: 15px;
    }
    input {
      box-sizing: border-box;
      border: 1px solid #e9e9e9;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: inherit;
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
  }
`
interface InputFieldProps {
  label: string
  name: string
  onChange: (e) => void | null
  placeholder?: string
  error?: string
  type?: 'number' | 'text' | 'password'
  value: string
  title: string
  maxLength?: number
  isRequired?: boolean
  style?: {
    marginTop?: string
    marginLeft?: string
    marginBottom?: string
    marginRight?: string
  }
}
export default function InputField({
  label,
  name,
  placeholder,
  error,
  type,
  value,
  style,
  title,
  maxLength,
  onChange,
  isRequired,
}: InputFieldProps) {
  return (
    <Styles>
      <div className="form__control" style={style}>
        <label htmlFor={label}>
          {capitalizeFirstLetter(title)}{' '}
          {isRequired && <span style={{ color: value.length ? '#4cd964' : 'red' }}>*</span>}{' '}
          {maxLength && (
            <span style={{ fontSize: 12, color: '#c7c7c7' }}>
              (<span>{value.length}</span>/{' '}
              <span style={{ color: value.length > maxLength && 'red' }}>{maxLength}</span>)
            </span>
          )}
        </label>
        <input
          id={label}
          name={name}
          value={value}
          placeholder={capitalizeFirstLetter(placeholder)}
          type={type || 'text'}
          onChange={(e) => onChange(e)}
          className={`${error && 'error'}`}
          style={{ borderColor: error || (value.length > maxLength && 'red') }}
        />
        {error || maxLength ? (
          <DisplayInputError
            error={
              error ||
              (value.length > maxLength &&
                `${capitalizeFirstLetter(
                  title
                )} is too long, max of ${maxLength} characters is allowed`)
            }
          />
        ) : null}
      </div>
    </Styles>
  )
}
