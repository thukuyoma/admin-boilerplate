import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import TableAvatar from './TableAvatar'
import { IconTrash } from '@tabler/icons'
import Button from './Button'

const Styles = styled.div`
  margin-bottom: 30px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 12px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid #ccc;
  .ticket__subject {
    min-width: 200px;
  }
  .table__cell {
    border-color: red;
    padding: 16px;
    border: none;
    text-align: left;
    border-top: 1px solid rgb(238, 238, 238);
  }
  .table-cell__align-right {
    text-align: right;
  }
  .table-cell__align-left {
    text-align: right;
  }
  .table-cell__border-top {
    border-top: none;
  }
  .ticket__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function SupportTable({ tickets }) {
  const router = useRouter()
  return (
    <Styles>
      <TableContainer>
        <Table aria-label="support ticket">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="table__cell table-cell__border-top">
                #
              </TableCell>
              <TableCell className="table__cell table-cell__border-top">Subject</TableCell>
              <TableCell className="table__cell table-cell__border-top">Department</TableCell>
              <TableCell className="table__cell table-cell__border-top">Date</TableCell>
              <TableCell
                align="right"
                className="table__cell table-cell__align-right table-cell__border-top"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.length &&
              tickets.map((ticket) => (
                <TableRow
                  key={nanoid()}
                  onClick={() => router.push(`supports/${ticket._id}`)}
                  onKeyPress={() => router.push(`supports/${ticket._id}`)}
                  className="table__row"
                >
                  <TableCell className="table__cell">
                    <TableAvatar initial={ticket.requester.firstName} />
                  </TableCell>
                  <TableCell className="table__cell ticket__subject">{ticket.subject}</TableCell>
                  <TableCell className="table__cell">{ticket.department}</TableCell>
                  <TableCell className="table__cell ticket__timestamp">
                    {dateFormatter(ticket.timestamp)}
                  </TableCell>
                  <TableCell className="table__cell table-cell__align-right">
                    <Button
                      title={`${ticket.status.isClosed ? 'Closed' : 'Open'}`}
                      size="small"
                      curved
                      color={`${ticket.status.isClosed ? 'dark' : 'danger'}`}
                      variant="outlined"
                      align="right"
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Styles>
  )
}
