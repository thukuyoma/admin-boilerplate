import React from 'react'
import styled from 'styled-components'
import TotalAmount from '../../payments/analytics/TotalAmount'

const Styles = styled.div`
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
`
export default function CountGroupThree() {
  return (
    <Styles>
      <TotalAmount />
      {/* <CountTwo
        itemCount="10K"
        itemName="Ratings Received"
        iconBg="#11c15b"
        icon={<IconVolume color="#fff" strokeWidth={1.5} />}
        style={{ marginBottom: 30 }}
      /> */}
      {/* <CountTwo
        itemCount="10K"
        itemName="Ratings Received"
        iconBg="#448aff"
        icon={<IconVolume color="#fff" strokeWidth={1.5} />}
      /> */}
    </Styles>
  )
}
