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
import StatusButton from '../buttons/StatusButton'

const Styles = styled.div`
  .application__subject {
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
  .table-cell__align-center {
    text-align: center;
  }
  .table-cell__border-top {
    border-top: none;
  }
  .application__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function ApplicationListTable({ applications }) {
  const router = useRouter()
  return (
    <Styles>
      {applications?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Country</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Programme</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Applied On</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Status</TableCell>
                  <TableCell
                    align="right"
                    className="table__cell table-cell__align-right table-cell__border-top"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.length
                  ? applications.map((application) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/applications/${application._id}`)}
                        onKeyPress={() => router.push(`/applications/${application._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar initial={application.firstName} size="large" />
                        </TableCell>
                        <TableCell className="table__cell application__subject">
                          {capitalizeFirstLetter(application.firstName)}{' '}
                          {capitalizeFirstLetter(application.lastName)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(application.desiredCountry)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(application.programme)}
                        </TableCell>
                        <TableCell className="table__cell application__timestamp">
                          {dateFormatter(application.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell application__timestamp">
                          <StatusButton
                            title={application.status.isApplied ? 'Applied' : 'Pending'}
                            color={application.status.isApplied ? 'success' : 'warning'}
                          />
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="Respond"
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
