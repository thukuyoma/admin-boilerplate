/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { AiOutlineCheck } from 'react-icons/ai'
import styled from 'styled-components'
import emailValidator from '../../utils/email-validator'
import userChecker from '../../actions/account/user-checker'
import { Control, InputTitle } from '../forms/form-styles'
import ErrorAlert from '../shared/ErrorAlert'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'
import Loader from '../shared/Loader'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  .show-author-title {
    display: flex;
    align-items: center;
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    outline: 0;
    border: 0;
    background: inherit;
    color: #0098db;
    height: 100%;
}
  }
  .input__group {
    height: 45px;
    margin-top: 10px;
    outline: none;
    background: inherit;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #cacaca;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    input {
      width: 100%;
      border: none;
      outline: none;
      background: inherit;
    }
  }
  .check-user__firstname {
    color: rgb(88, 197, 93);
    font-size: '14px';
  }
  .check__icon {
    color: rgb(88, 197, 93);
    font-size: 15px;
  }
`

export default function CheckUser({ email, setEmail, setUser }) {
  const [inputError, setInputError] = useState<string>('')
  const { refetch, data, isLoading, isSuccess, isError } = useQuery(
    ['checkUser', email],
    () => userChecker(email),
    {
      enabled: false,
      onSuccess: (res) => setUser(res),
      onError: (err) => {
        setUser(null)
        setInputError(err.toString())
      },
    }
  )

  const handleCheckUser = (e) => {
    e.preventDefault()
    if (!email) {
      return setInputError('User to make admin email is required')
    }
    if (!emailValidator(email)) {
      return setInputError('Invalid Email Address')
    }
    return refetch()
  }

  const handleEmailChange = (e) => {
    setInputError('')
    setEmail(e.target.value)
  }

  return (
    <Styles>
      <Control>
        <InputTitle>User to make Admin Email</InputTitle>
        {isSuccess && data && (
          <>
            <TagKeyValuePair>
              <TagKey>Name:</TagKey>
              <TagValue>
                {capitalizeFirstLetter(data.firstName)} {capitalizeFirstLetter(data.lastName)}
              </TagValue>
            </TagKeyValuePair>
          </>
        )}
        <div className="input__group">
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleEmailChange}
            placeholder="User Email"
          />
          <button
            className="button-wrapper"
            disabled={isLoading}
            onKeyPress={handleCheckUser}
            onClick={handleCheckUser}
          >
            Check
            <Loader width={20} marginLeft={10} size={3} isLoading={isLoading} />
            {isSuccess && data && <AiOutlineCheck className="check__icon" />}
          </button>
        </div>
        {inputError && <ErrorAlert error={inputError} />}
      </Control>
    </Styles>
  )
}
