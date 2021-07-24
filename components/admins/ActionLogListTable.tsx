import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import Avatar from '../shared/Avatar'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import StatusButton from '../buttons/StatusButton'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

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
                  <TableCell className="table__cell table-cell__border-top">Activity</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Timestamp</TableCell>
                  <TableCell className="table__cell table-cell__border-top table-cell__align-right">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {actionLogs.length
                  ? actionLogs.map((actionLog) => (
                      <TableRow key={nanoid()} className="table__row">
                        <TableCell className="table__cell">
                          <Avatar size="medium" initial={actionLog.createdBy.adminFullName} />
                        </TableCell>
                        <TableCell className="table__cell actionLog__subject">
                          {capitalizeFirstLetter(actionLog.activity)}
                        </TableCell>
                        <TableCell className="table__cell actionLog__timestamp">
                          {dateFormatter(actionLog.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell actionLog__timestamp table-cell__align-right">
                          {
                            <StatusButton
                              color={!actionLog.status.isBlocked ? 'success' : 'danger'}
                              title={!actionLog.status.isBlocked ? 'Active' : 'Blocked'}
                            />
                          }
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
