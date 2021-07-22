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
  .scholarship__subject {
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
  .scholarship__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function ScholarshipListTable({ scholarships }) {
  const router = useRouter()
  return (
    <Styles>
      {scholarships?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Views</TableCell>
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
                {scholarships.length
                  ? scholarships.map((scholarship) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`scholarships/${scholarship._id}`)}
                        onKeyPress={() => router.push(`scholarships/${scholarship._id}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar
                            image={scholarship?.image.url}
                            initial={scholarship.title}
                            size="large"
                          />
                        </TableCell>
                        <TableCell className="table__cell scholarship__subject">
                          {capitalizeFirstLetter(scholarship.title)}
                        </TableCell>
                        <TableCell className="table__cell">
                          {scholarship?.viewCount ? scholarship.viewCount : 0}
                        </TableCell>
                        <TableCell className="table__cell scholarship__timestamp">
                          {dateFormatter(scholarship.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell scholarship__timestamp">
                          <StatusButton
                            title={scholarship.status.isPublished ? 'Online' : 'Offline'}
                            color={scholarship.status.isPublished ? 'success' : 'warning'}
                          />
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
