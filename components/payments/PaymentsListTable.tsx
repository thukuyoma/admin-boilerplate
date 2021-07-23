import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import Avatar from '../shared/Avatar'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'

const Styles = styled.div`
  .table__cell {
    border-color: red;
    padding: 16px;
    border: none;
    text-align: left;
    border-top: 1px solid rgb(238, 238, 238);
    whitespace: nowrap;
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
  .payment__timestamp {
    min-width: 150px;
  }
`

export default function PaymentListTable({ payments }) {
  const router = useRouter()
  return (
    <Styles>
      {payments?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Currency</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Amount</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Processor</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Reference</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Reason</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.length
                  ? payments.map((payment) => (
                      <TableRow key={nanoid()} className="table__row">
                        <TableCell className="table__cell">
                          <Avatar
                            image={payment?.image?.url}
                            initial={payment.firstName}
                            size="large"
                          />
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(payment.firstName)}{' '}
                          {capitalizeFirstLetter(payment.lastName)}
                        </TableCell>
                        <TableCell className="table__cell payment__timestamp">
                          {payment.currency}
                        </TableCell>
                        <TableCell className="table__cell">{payment.amount}</TableCell>
                        <TableCell className="table__cell payment__timestamp">
                          {payment.processor}
                        </TableCell>
                        <TableCell className="table__cell payment__type">
                          {payment.reference}
                        </TableCell>
                        <TableCell className="table__cell payment__timestamp">
                          {payment.reason}
                        </TableCell>
                        <TableCell className="table__cell payment__timestamp">
                          {dateFormatter(payment.timestamp)}
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
