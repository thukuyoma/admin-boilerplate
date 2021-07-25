import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import replyTicket from '../../actions/support/reply-ticket'
import DisplayInputError from '../forms/DisplayInputError'
import Button from '../buttons/Button'

const Styles = styled.div`
  margin-top: 50px;
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

export default function ReplySupportTicket({ ticketId, refetch }) {
  const [message, setMessage] = useState('')
  const [inputError, setInputError] = useState('')
  const { mutateAsync, isLoading } = useMutation(replyTicket)
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
      { message, ticketId },
      {
        onSuccess: (data) => {
          toast.success(data)
          setMessage('')
          refetch()
        },
      }
    )
  }
  return (
    <Styles>
      <p className="tag__title">Reply Support Log</p>
      <textarea
        value={message}
        onChange={(e) => {
          setInputError('')
          setMessage(e.target.value)
        }}
        placeholder="Write a short support log here"
      />
      <DisplayInputError error={inputError} />
      <Button
        block
        title="Submit Log"
        onClick={(e) => handleSubmitLog(e)}
        loading={isLoading}
        align="center"
        disabled={isLoading}
        variant="filled"
        color="primary"
        size="medium"
      />
    </Styles>
  )
}
