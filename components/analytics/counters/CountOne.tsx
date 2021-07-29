import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  height: 90px;
  padding: 20px 15px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #616161;
  .count__icon {
    // color: #673ab7;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 14px;
    background-color: #e3f2fd;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .count__details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h5 {
      margin: 0;
      font-weight: 600;
      font-size: 14px;
    }
    p {
      margin: 0;
      line-height: 1.4;
      font-size: 12px;
    }
  }
`
export default function CountOne({
  itemCount,
  itemName,
  style,
  icon,
}: {
  itemCount: string
  itemName: string
  style?: object
  icon: ReactElement
}) {
  return (
    <Styles style={style}>
      <div className="count__icon">{icon}</div>
      <div className="count__details">
        <h5>{itemCount}</h5>
        <p>{itemName}</p>
      </div>
    </Styles>
  )
}
