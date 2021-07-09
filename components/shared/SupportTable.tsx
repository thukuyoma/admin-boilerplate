import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import { makeStyles } from '@material-ui/core/styles'

const Styles = styled.div`
  margin-bottom: 30px;
  background-color: rgb(255, 255, 255);
  color: rgb(97, 97, 97);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid rgba(144, 202, 249, 0.46);

  .card__tag {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background: #e3f2fd;
    color: #0098db;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  .card__button {
    cursor: pointer;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px 20px;
    color: #a2a1a1;
    white-space: nowrap;
    font-size: 12px;
  }
  .ticket__subject {
    min-width: 200px;
  }
  .ticket__row {
    border-bottom: 1px solid rgb(238, 238, 238) !important;
    border: none;
  }
  .ticket__row {
    border-color: red;
    padding: 16px;
    border-bottom: 1px solid rgb(238, 238, 238) !important;
    // border: none;
  }
  .ticket__timestamp {
    min-width: 150px;
  }
`

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  tableRow: {
    borderColor: 'green',
  },
  tableCell: {},
}))

export default function SupportTable({ tickets }) {
  const router = useRouter()
  const classes = useStyles()
  return (
    <Styles>
      <TableContainer>
        <Table aria-label="support ticket">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="left">Subject</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.length &&
              tickets.map((ticket) => (
                <TableRow key={nanoid()} className={classes.tableRow}>
                  <TableCell component="th" scope="row" className="ticket__row">
                    <div className="card__tag">
                      {ticket.requester.firstName.charAt(0).toUpperCase()}
                    </div>
                  </TableCell>
                  <TableCell align="left" className="ticket__row ticket__subject">
                    {ticket.subject}
                  </TableCell>
                  <TableCell align="left" className="ticket__row">
                    {ticket.department}
                  </TableCell>
                  <TableCell align="left" className="ticket__row ticket__timestamp">
                    {dateFormatter(ticket.timestamp)}
                  </TableCell>
                  <TableCell align="right" className="ticket__row">
                    <div
                      onClick={() => router.push(`supports/${ticket._id}`)}
                      onKeyPress={() => router.push(`supports/${ticket._id}`)}
                      tabIndex={0}
                      className="card__button"
                      style={{ borderColor: !ticket.status.isClosed ? 'orange' : 'green' }}
                    >
                      {ticket.status.isClosed ? 'Closed' : 'Open'}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Styles>
  )
}
