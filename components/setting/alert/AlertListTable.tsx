import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../../utils/date-formatter'
import Avatar from '../../shared/Avatar'
import Button from '../../buttons/Button'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'
import StatusButton from '../../buttons/StatusButton'

const Styles = styled.div`
  .alert__subject {
    min-width: 200px;
  }
  .table__cell {
    border-color: red;
    padding: 16px;
    border: none;
    border-top: 1px solid rgb(238, 238, 238);
  }
  .table-cell__align-right {
    text-align: right;
  }
  .table-cell__align-left {
    text-align: left;
  }
  .table-cell__align-center {
    text-align: center;
  }
  .table-cell__border-top {
    border-top: none;
  }
  .alert__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function AlertListTable({ alerts }) {
  const router = useRouter()
  return (
    <Styles>
      {alerts?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Type</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Expiration</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Status</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alerts.length
                  ? alerts.map((alert) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/settings/alerts/${alert._id}`)}
                        onKeyPress={() => router.push(`/settings/alerts/${alert._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar size="large" initial={alert.type} />
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(alert.type)}
                        </TableCell>
                        <TableCell className="table__cell alert__subject">
                          {dateFormatter(alert.expiresAt)}
                        </TableCell>
                        <TableCell className="table__cell alert__timestamp">
                          {dateFormatter(alert.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell alert__timestamp">
                          {
                            <StatusButton
                              color={alert.status.isActive ? 'success' : 'danger'}
                              title={alert.status.isActive ? 'Active' : 'Offline'}
                            />
                          }
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="View"
                            color="info"
                            size="small"
                            variant="filled"
                            align="left"
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
