import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
margin-bottom: 10px;
color: #616161;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
background-image: none;
border-radius: 12px;
overflow: hidden;
border: 1px solid rgba(144, 202, 249, 0.46);
  
  }
  .counter__name {
    font-weight: 400;
    font-size: 13px;
    margin-top: 5px;
    line-height: 1.334;
    color: inherit;
  }
`
export default function CountFive({
  itemCount,
  itemName,
  icon,
}: {
  itemCount: string
  itemName: string
  icon: ReactElement
}) {
  return (
    <Styles>
      <div className="left">
        {icon}
        <p className="counter__name">{itemName}</p>
      </div>
      <div className="right">
        <p className="counter__number">{itemCount}</p>
      </div>
    </Styles>
  )
}
