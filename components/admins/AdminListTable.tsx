import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import TableAvatar from '../shared/TableAvatar'
import Button from '../shared/Button'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'

const Styles = styled.div`
  .admin__subject {
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
  .admin__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function AdminListTable({ admins }) {
  const router = useRouter()
  return (
    <Styles>
      {admins?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Role</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
                  <TableCell
                    align="right"
                    className="table__cell table-cell__align-right table-cell__border-top"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admins.length
                  ? admins.map((admin) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/admins/${admin._id}`)}
                        onKeyPress={() => router.push(`/admins/${admin._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <TableAvatar image={admin?.image?.url} />
                        </TableCell>
                        <TableCell className="table__cell admin__subject">
                          {capitalizeFirstLetter(admin.firstName)}{' '}
                          {capitalizeFirstLetter(admin.lastName)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {capitalizeFirstLetter(admin.role)}
                        </TableCell>
                        <TableCell className="table__cell admin__timestamp">
                          {dateFormatter(admin.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="See More"
                            color="info"
                            size="small"
                            variant="outlined"
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
