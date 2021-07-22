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
  .category__description {
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
                  <TableCell className="table__cell table-cell__border-top">Date Created</TableCell>
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
                {categories.length
                  ? categories.map((category) => (
                      <TableRow
                        key={nanoid()}
                        onClick={() => router.push(`/blogs/categories/${category.title}`)}
                        onKeyPress={() => router.push(`/blogs/categories/${category.title}`)}
                        className="table__row"
                      >
                        <TableCell className="table__cell">
                          <Avatar
                            image={category?.image?.url}
                            initial={category.title}
                            size="large"
                          />
                        </TableCell>
                        <TableCell className="table__cell category__subject">
                          {capitalizeFirstLetter(category.title)}
                        </TableCell>
                        <TableCell className="table__cell category__timestamp">
                          {dateFormatter(category.timestamp)}
                        </TableCell>
                        <TableCell className="table__cell category__timestamp">
                          <StatusButton
                            title={category.status.isPublished ? 'Online' : 'Offline'}
                            color={category.status.isPublished ? 'success' : 'warning'}
                          />
                        </TableCell>

                        <TableCell className="table__cell table-cell__align-right">
                          <Button
                            title="See More"
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
