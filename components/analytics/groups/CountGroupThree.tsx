import React from 'react'
import styled from 'styled-components'
import TotalAmount from '../../payments/analytics/TotalAmount'
import TotalUniqueVisitors from '../TotalUniqueVisitors'

const Styles = styled.div`
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
`
export default function CountGroupThree() {
  return (
    <Styles>
      <TotalAmount />
      <TotalUniqueVisitors />
    </Styles>
  )
}
