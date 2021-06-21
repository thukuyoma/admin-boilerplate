import moment from 'moment'
import React from 'react'
import Link from 'next/link'
import { CgCalendarDates } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'

const Styles = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 #e2e5e8;
  padding: 10px;
  background: #fff;
  margin-bottom: 15px;

  .admin-details {
    display: flex;
    flex-direction: column;
  }

  P {
    display: flex;
    align-items: center;
    color: gray;
    margin: 0 10px 5px 0;
  }
  .icons {
    display: flex;
    color: orange;
    margin-right: 10px;
  }
  .caption {
    margin-right: 10px;
    color: orange;
  }
  .button {
    padding: 5px 20px;
    border: 1px solid #f7bc4f;
    border-radius: 3px;
    cursor: pointer;
    min-width: 100px;
    text-align: center;
    :hover {
      background-color: #f7bc4f;
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    .admin-details {
      flex-direction: column;
    }
  }
`

export default function AdminCard({ admin }) {
  return (
    <Styles>
      <div className="admin-details">
        <p>
          <HiOutlineMail className="icons" />
          {admin.email}
        </p>
        <p>
          <CgCalendarDates className="icons" />
          {dateFormatter(admin.createdOn)}
        </p>
      </div>
      <div>
        <Link href={`/admins/${admin._id}`}>
          <a>
            <div className="button">View</div>
          </a>
        </Link>
      </div>
    </Styles>
  )
}
