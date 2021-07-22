import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import Avatar from '../shared/Avatar'
import Button from '../buttons/Button'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import wordShortener from '../../utils/wordShortener'
import StatusButton from '../buttons/StatusButton'

const Styles = styled.div`
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
  .table-cell__align-center {
    text-align: center;
  }
  .table-cell__border-top {
    border-top: none;
  }
  .booking__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function BookingListTable({ bookings }) {
  const router = useRouter()
  return (
    <Styles>
      {bookings?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Title</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Type</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Status</TableCell>
                  <TableCell
                    align="right"
                    className="table__cell table-cell__align-right table-cell__border-top"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.length
                  ? bookings.map((booking) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/bookings/${booking._id}`)}
                        onKeyPress={() => router.push(`/bookings/${booking._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar
                            image={booking?.image?.url}
                            initial={booking.title}
                            size="large"
                          />
                        </TableCell>
                        <TableCell className="table__cell">
                          {wordShortener(capitalizeFirstLetter(booking.title), 12)}
                        </TableCell>
                        <TableCell className="table__cell booking__type">
                          {capitalizeFirstLetter(booking.type)}
                        </TableCell>
                        <TableCell className="table__cell booking__timestamp">
                          {dateFormatter(booking.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell bookingRequest__timestamp">
                          <StatusButton
                            title={booking.status.isPublished ? 'Online' : 'Offline'}
                            color={booking.status.isPublished ? 'success' : 'warning'}
                          />
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="See Booking"
                            color="info"
                            size="small"
                            variant="filled"
                            align="right"
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
