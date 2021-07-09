import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import randomColorPicker from '../../utils/random-color-picker'

const Styles = styled.div`
  margin-bottom: 30px;
  .card__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card__group {
    display: flex;
  }
  .card__tag {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 50px;
    background: #f0f0f0;
    color: #8b8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  .card__name {
    font-size: 13px;
    color: #a2a1a1;
    display: flex;
    flex-wrap: wrap;
  }
  .applicant__nationality {
    margin-left: 5px;
  }
  .card__email {
    font-size: 14px;
    margin: 0;
    padding-top: 3px;
  }
  .card__button {
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px 10px;
    color: #a2a1a1;
    white-space: nowrap;
    font-size: 14px;
  }
  .card__actions {
    display: flex;
    flex-direction: column;
  }
  .view-more__button {
    display: none;
  }
  .card__timestamp {
    font-style: italic;
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    .card__button {
      display: none;
    }
    .view-more__button {
      display: flex;
      color: #0098db;
      margin-bottom: 0;
    }
  }
`

export default function TableCardOne({
  // firstName,
  // lastName,
  // timestamp,
  // mainText,
  // buttonTItle,
  // buttonLink,
  items,
}: {
  // firstName: string
  // lastName: string
  // timestamp: string | number
  // mainText: string
  // buttonTItle: string
  // buttonLink: string
  items: object[]
}) {
  const colors = randomColorPicker()
  const router = useRouter()
  return (
    <Styles>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length &&
              items.map((item) => (
                <TableRow key={nanoid()}>
                  {/* <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.calories}</TableCell>
                <TableCell align="right">{item.fat}</TableCell>
                <TableCell align="right">{item.carbs}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Styles>
  )
}
