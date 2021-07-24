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
  .user__subject {
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
  .user__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function UserListTable({ users }) {
  const router = useRouter()
  return (
    <Styles>
      {users?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Active</TableCell>
                  <TableCell
                    align="right"
                    className="table__cell table-cell__align-right table-cell__border-top"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.length
                  ? users.map((user) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/users/${user._id}`)}
                        onKeyPress={() => router.push(`/users/${user._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar size="large" image={user?.image?.url} initial={user.firstName} />
                        </TableCell>
                        <TableCell className="table__cell user__subject">
                          {capitalizeFirstLetter(user.firstName)}{' '}
                          {capitalizeFirstLetter(user.lastName)}
                        </TableCell>
                        <TableCell className="table__cell user__timestamp">
                          {dateFormatter(user.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell user__timestamp">
                          {
                            <StatusButton
                              color={!user.status.isBlocked ? 'success' : 'danger'}
                              title={!user.status.isBlocked ? 'Active' : 'Blocked'}
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
