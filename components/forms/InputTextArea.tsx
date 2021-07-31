import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  margin-bottom: 20px;
  width: 100%;
  .form__control {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      margin-bottom: 10px;
    }
    textarea {
      box-sizing: border-box;
      border: 1px solid #e9e9e9;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: inherit;
      height: 50px;
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
    .textarea-error {
      margin-top: 10px;
      display: flex;
      align-items: center;
      color: red;
    }
    .textarea-error__error {
      margin-right: 5px;
    }
    .error {
      border: 1px solid red;
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
        />
        {error && (
          <div className="textarea-error">
            <AiFillInfoCircle className="textarea-error__error" />
            {error}
          </div>
        )}
      </div>
    </Styles>
  )
}
