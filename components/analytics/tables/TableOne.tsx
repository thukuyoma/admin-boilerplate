import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ReactCountryFlag from 'react-country-flag'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const Styles = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(97, 97, 97);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid rgba(144, 202, 249, 0.46);
  margin-bottom: 10px;

  .table__title {
    padding: 16px;
    margin: 0;
    border-bottom: 1px solid rgb(238, 238, 238);
  }
  .table__header {
    text-align: right;
  }
  .header-table__Cell {
    font-size: 12px;
    color: rgb(33, 33, 33);
    font-weight: 500;
  }
  .table__Container {
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
    border: none;
  }
  .table__row {
    border-bottom: 1px solid rgb(238, 238, 238);
    :hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  .table__cell {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5em;
    letter-spacing: 0em;
    color: rgb(97, 97, 97);
  }
  .table__cell--starter {
    text-align: left;
  }
  .table__footer {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0 16px;
    font-size: 12px;
    color: #0098db;
    padding: 16px;
    justify-content: flex-end;
  }
`

const users = [
  {
    countryCode: 'AU',
    countryName: 'Australia',
    name: 'Jenifer Vintage',
    average: '12.45%',
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    name: 'Lori Moore',
    average: '18.65%',
  },
  {
    countryCode: 'BR',
    countryName: 'Brazil',
    name: 'Allianz Dacron',
    average: '3.56%',
  },
  {
    countryCode: 'NG',
    countryName: 'Nigeria',
    name: 'Jenifer Vintage',
    average: '3.56%',
  },
  {
    countryCode: 'NG',
    countryName: 'Nigeria',
    name: 'Jenifer Vintage',
    average: '3.56%',
  },
]

export default function TableOne() {
  return (
    <Styles>
      <TableContainer className="table__Container">
        <h5 className="table__title">Recent Customers</h5>
        <Table className="table">
          <TableHead className="table__header">
            <TableRow>
              <TableCell align="left" className="header-table__Cell">
                #
              </TableCell>
              <TableCell align="left" className="header-table__Cell">
                Country
              </TableCell>
              <TableCell align="left" className="header-table__Cell">
                Name
              </TableCell>
              <TableCell align="right" className="header-table__Cell">
                Average
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={nanoid()} className="table__row">
                <TableCell align="left" className="table__cell">
                  <ReactCountryFlag
                    countryCode={row.countryCode.toUpperCase()}
                    style={{
                      width: '30px',
                      height: '20px',
                    }}
                    svg
                  />
                </TableCell>
                <TableCell align="left" className="table__cell">
                  {row.countryName}
                </TableCell>
                <TableCell align="left" className="table__cell">
                  {row.name}
                </TableCell>
                <TableCell align="right" className="table__cell">
                  {row.average}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="table__footer">Table Footer</div>
      </TableContainer>
    </Styles>
  )
}
