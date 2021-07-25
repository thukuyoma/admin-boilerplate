import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import editLog from '../../actions/application/edit-log'
import DisplayInputError from '../forms/DisplayInputError'
import Button from '../buttons/Button'

const Styles = styled.div`
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
  textarea {
    border: 1px solid #ced4da;
    box-sizing: border-box;
    border-radius: 3px;
    min-height: 130px;
    padding: 10px 10px;
    width: 100%;
    font-family: inherit;
    margin-bottom: 10px;
    :focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
    }
    :hover {
      background: #f0f0f0;
    }
  }
`

export default function EditSupportLog({
  applicationLogId,
  logToUpdate,
  applicationId,
  refetchApplicationLogs,
  setLogToUpdate,
}) {
  const [message, setMessage] = useState(logToUpdate)
  const [inputError, setInputError] = useState('')
  const { mutateAsync, isLoading, isSuccess } = useMutation(editLog)

  const handleSubmitLog = async (e) => {
    e.preventDefault()
    if (!message) {
      setInputError('Log message is required')
      return null
    }
    if (message && message.length < 10) {
      setInputError('Log message too short')
      return null
    }
    await mutateAsync(
      { message, applicationId, applicationLogId },
      {
        onSuccess: (data) => {
          setMessage('')
          refetchApplicationLogs()
          toast.success(data)
          setLogToUpdate('')
        },
      }
    )
  }
  return (
    <Styles>
      <textarea
        value={message}
        onChange={(e) => {
          setInputError('')
          setMessage(e.target.value)
        }}
        placeholder="Edit log here"
      />
      <DisplayInputError error={inputError} />
      <Button
        block
        title="Update Log"
        onClick={(e) => handleSubmitLog(e)}
        loading={isLoading}
        align="center"
        disabled={isLoading}
        color="primary"
        size="medium"
        variant="filled"
      />
    </Styles>
  )
}
