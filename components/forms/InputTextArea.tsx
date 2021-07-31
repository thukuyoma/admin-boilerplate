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
    textarea {
      box-sizing: border-box;
      border: 1px solid #e9e9e9;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: inherit;
      padding: 10px;
      background: inherit;
      ::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #c7c7c7;
      }
      :focus {
        border-color: #f4863a;
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
  type?: 'number' | 'text'
  value?: string | number
  title: string
  height: number
  style?: {
    marginTop?: string
    marginLeft?: string
    marginBottom?: string
    marginRight?: string
  }
}
export default function InputTextArea({
  label,
  name,
  placeholder,
  error,
  value,
  style,
  title,
  height,
  onChange,
}: InputFieldProps) {
  return (
    <Styles>
      <div className="form__control" style={style}>
        <label htmlFor={label}>{capitalizeFirstLetter(title)}</label>
        <textarea
          id={label}
          name={name}
          value={value}
          placeholder={capitalizeFirstLetter(placeholder)}
          onChange={(e) => onChange(e)}
          className={`${error && 'error'}`}
          style={{ height, borderColor: error && 'red' }}
        />
        {error && <DisplayInputError error={error} />}
      </div>
    </Styles>
  )
}
