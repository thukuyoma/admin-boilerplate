import { formatRelative } from 'date-fns'
import { IconPencil, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import IconButton from '../buttons/IconButton'
import EditSupportLog from './EditSupportLog'
import { useMutation } from 'react-query'
import deleteLog from '../../actions/application/delete-log'
import { toast } from 'react-toastify'

const Styles = styled.div`
  margin-bottom: 30px;
  .log__name-date {
    font-size: 13px;
    color: #8a8a8a;
    margin: 0;
  }
  .log__name {
    margin-right: 5px;
  }
  .log__date {
    font-style: italic;s
  }
  .log__message {
    margin: 0;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 400;
    color: #444;
  }
  .date-action {
    font-size: 12px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    color: darkgrey;
  }
  .icon-button {
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`

export default function ApplicationLogCard({ log, refetchApplicationLogs }) {
  const { mutateAsync, isLoading } = useMutation(deleteLog)
  const [logToUpdateId, setLogToUpdate] = useState('')

  const handleDelete = async (applicationLogId: string) => {
    if (!log) return null
    await mutateAsync(
      { applicationId: log.applicationId, applicationLogId },
      {
        onSuccess: (data) => {
          refetchApplicationLogs()
          toast.success(data)
        },
      }
    )
  }

  const handleEdit = (id: string) => {
    setLogToUpdate(id)
  }

  return (
    <Styles>
      <div className="date-action">
        <span className="log__name">
          {capitalizeFirstLetter(log.createdBy.adminFullName.split(' ')[0])}{' '}
        </span>
        <span className="log__date">{formatRelative(log.timestamp, Date.now())}</span>
        <IconButton
          onClick={() => handleDelete(log._id)}
          size="medium"
          color="danger"
          style={{ marginLeft: 10 }}
          loading={isLoading}
        >
          <IconTrash width={12} />
        </IconButton>
        <IconButton size="medium" color="secondary" onClick={() => handleEdit(log._id)}>
          <IconPencil width={12} />
        </IconButton>
      </div>
      <p className="log__message">{capitalizeFirstLetter(log.message)}</p>
      {logToUpdateId === log._id ? (
        <EditSupportLog
          logToUpdate={log.message}
          applicationId={log.applicationId}
          refetchApplicationLogs={refetchApplicationLogs}
          applicationLogId={log._id}
          setLogToUpdate={setLogToUpdate}
        />
      ) : null}
    </Styles>
  )
}
