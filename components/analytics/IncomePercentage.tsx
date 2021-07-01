import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  width: 250px;
  height: 100px;
  background: #339af0;
  border-radius: 10px;
`
export default function IncomePercentage() {
  return (
    <Styles>
      <div>
        <div>75%</div>
      </div>
      <div>
        <div>Average Spend</div>
        <div>
          <span></span>$ 23.100,00
        </div>
      </div>
    </Styles>
  )
}
