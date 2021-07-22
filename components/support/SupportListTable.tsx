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
  .support__subject {
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
  .table-cell__border-top {
    border-top: none;
  }
  .support__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function SupportListTable({ supports }) {
  const router = useRouter()
  return (
    <Styles>
      {supports?.length ? (
        <BorderPaddingWrapper>
          <TableContainer>
            <Table aria-label="support support">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className="table__cell table-cell__border-top">
                    #
                  </TableCell>
                  <TableCell className="table__cell table-cell__border-top">Subject</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date</TableCell>
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
                {supports.length
                  ? supports.map((support) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/supports/${support._id}`)}
                        onKeyPress={() => router.push(`/supports/${support._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar initial={support.createdBy.firstName} size="small" />
                        </TableCell>
                        <TableCell className="table__cell support__subject">
                          {capitalizeFirstLetter(support.subject)}
                        </TableCell>
                        <TableCell className="table__cell support__timestamp">
                          {dateFormatter(support.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell">
                          <StatusButton
                            title={support.status.isClosed ? 'Closed' : 'Open'}
                            color={support.status.isClosed ? 'success' : 'warning'}
                          />
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title={support.status.isClosed ? 'View' : 'Respond'}
                            color={support.status.isClosed ? 'info' : 'danger'}
                            size="small"
                            variant="filled"
                            align="right"
                            style={{ minWidth: 90 }}
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
