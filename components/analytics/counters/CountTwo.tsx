import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  height: 76px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 12px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid rgba(144, 202, 249, 0.46);
  background-color: rgb(255, 255, 255);

  .count__icon {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    flex-shrink: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .count__details {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: 100%;
    height: 100%;
    justify-content: center;
    // align-items: flex-end;
    color: #616161;
    h5 {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
    }
    p {
      margin: 0;
      line-height: 1.4;
      font-size: 12px;
    }
  }
`
export default function CountTwo({
  itemCount,
  itemName,
  icon,
  iconBg,
  style,
}: {
  itemCount: string
  itemName: string
  icon: ReactElement
  iconBg: string
  style?: { marginBottom: number }
}) {
  return (
    <Styles style={style}>
      <div className="count__icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <div className="count__details">
        <h5>{itemCount}</h5>
        <p>{itemName}</p>
      </div>
    </Styles>
  )
}
