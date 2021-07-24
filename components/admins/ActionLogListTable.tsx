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
  .actionLog__subject {
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
  .actionLog__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function ActionLogListTable({ actionLogs }) {
  const router = useRouter()
  return (
    <Styles>
      {actionLogs?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Activity</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Timestamp</TableCell>
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
                {actionLogs.length
                  ? actionLogs.map((actionLog) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/actionLogs/${actionLog._id}`)}
                        onKeyPress={() => router.push(`/actionLogs/${actionLog._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar
                            size="large"
                            image={actionLog?.image?.url}
                            initial={actionLog.firstName}
                          />
                        </TableCell>
                        <TableCell className="table__cell actionLog__subject">
                          {capitalizeFirstLetter(actionLog.firstName)}{' '}
                          {capitalizeFirstLetter(actionLog.lastName)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(actionLog.role)}
                        </TableCell>
                        <TableCell className="table__cell actionLog__timestamp">
                          {dateFormatter(actionLog.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell actionLog__timestamp">
                          {
                            <StatusButton
                              color={!actionLog.status.isBlocked ? 'success' : 'danger'}
                              title={!actionLog.status.isBlocked ? 'Active' : 'Blocked'}
                            />
                          }
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="View"
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
