import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../../utils/date-formatter'
import TableAvatar from '../../shared/TableAvatar'
import Button from '../../shared/Button'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'

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
  .category__timestamp {
    min-width: 150px;
  }
  .table__row {
    cursor: pointer;
  }
`

export default function BlogCategoriesListTable({ categories }) {
  const router = useRouter()
  return (
    <Styles>
      {categories?.length ? (
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
                  <TableCell className="table__cell table-cell__border-top">Description</TableCell>
                  <TableCell className="table__cell table-cell__border-top">Date</TableCell>
                  <TableCell
                    align="right"
                    className="table__cell table-cell__align-right table-cell__border-top"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.length
                  ? categories.map((category) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`categories/${category.title}`)}
                        onKeyPress={() => router.push(`categories/${category.title}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <TableAvatar image={category?.image?.url} />
                        </TableCell>
                        <TableCell className="table__cell category__subject">
                          {capitalizeFirstLetter(category.title)}
                        </TableCell>
                        <TableCell className="table__cell">{category?.description}</TableCell>
                        <TableCell className="table__cell category__timestamp">
                          {dateFormatter(category.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title={`${category.status.isPublished ? 'Online' : 'Offline'}`}
                            color={`${category.status.isPublished ? 'info' : 'danger'}`}
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
