import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import Avatar from '../shared/Avatar'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import ToggleBookedStatusButton from './actions/ToggleBookedStatusButton'
import StatusButton from '../buttons/StatusButton'

const Styles = styled.div`
  .bookingRequest__subject {
    min-width: 200px;
  }
  .table__cell {
    border-color: red;
    padding: 16px;
    border: none;
    text-align: left;
    border-top: 1px solid rgb(238, 238, 238);
    white-space: nowrap;
  }
  .table-cell__align-right {
    text-align: right;
  }
  .table-cell__align-left {
    text-align: right;
  }
  .table-cell__align-center {
    text-align: center;
  }
  .table-cell__border-top {
    border-top: none;
  }
  .bookingRequest__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function BookingRequestListTable({ bookingRequests, refetch }) {
  return (
    <Styles>
      {bookingRequests?.length ? (
        <BorderPaddingWrapper>
          <TableContainer>
            <Table aria-label="Blog List Table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    className="table__cell table-cell__border-top table-cell__align-center"
                  >
                    #
                  </TableCell>
                  <TableCell className="table__cell table-cell__border-top">Name</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Title</TableCell>
                  <TableCell className="table__cell table-cell__border-top">email</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Phone Number</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Status</TableCell>
                  <TableCell
                    className="table__cell table-cell__border-top table-cell__align-right"
                    align="right"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingRequests.length
                  ? bookingRequests.map((bookingRequest) => (
                      <TableRow key={nanoid()} className="table__row">
                        <TableCell className="table__cell">
                          <Avatar
                            image={bookingRequest?.image?.url}
                            initial={bookingRequest.firstName}
                            size="large"
                          />
                        </TableCell>
                        <TableCell className="table__cell bookingRequest__subject">
                          {capitalizeFirstLetter(bookingRequest.firstName)}{' '}
                          {capitalizeFirstLetter(bookingRequest.lastName)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(bookingRequest.title)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(bookingRequest.email)}
                        </TableCell>
                        <TableCell className="table__cell" style={{ whiteSpace: 'nowrap' }}>
                          {capitalizeFirstLetter(bookingRequest.telephoneNumber)}
                        </TableCell>
                        <TableCell className="table__cell bookingRequest__timestamp">
                          {dateFormatter(bookingRequest.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell bookingRequest__timestamp">
                          <StatusButton
                            title={bookingRequest.status.isBooked ? 'Booked' : 'Pending'}
                            color={bookingRequest.status.isBooked ? 'success' : 'warning'}
                          />
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <ToggleBookedStatusButton
                            isBooked={bookingRequest.status.isBooked}
                            refetch={refetch}
                            bookingRequestId={bookingRequest._id}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </BorderPaddingWrapper>
      ) : null}
    </Styles>
  )
}
