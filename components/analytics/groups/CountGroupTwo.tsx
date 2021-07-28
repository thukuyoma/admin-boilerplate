import React from 'react'
import styled from 'styled-components'
import TotalBlogs from '../../blog/analytics/TotalBlogs'
import TotalBookings from '../../bookings/analytics/TotalBookings'
import TotalScholarships from '../../scholarship/analytics/TotalScholarships'
import TotalPayments from '../../payments/analytics/TotalPayments'

const Styles = styled.div`
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border-radius: 12px;
  border: 1px solid rgba(144, 202, 249, 0.46);
  .count-group__top {
    display: flex;
    border-bottom: 1px solid #eeeeee;
  }
  .count-group__bottom {
    display: flex;
  }
`
export default function CountGroupTwo() {
  return (
    <Styles>
      <div className="count-group__top">
        <TotalBlogs />
        <TotalBookings />
      </div>
      <div className="count-group__bottom">
        <TotalScholarships />
        <TotalPayments />
      </div>
    </Styles>
  )
}
