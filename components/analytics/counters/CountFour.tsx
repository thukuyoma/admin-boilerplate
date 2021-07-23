import { IconEye } from '@tabler/icons'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid rgba(144, 202, 249, 0.46);

  .counter__header {
    margin: 0;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 14px;
  }
  .counter__text {
    margin: 0;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.167;
    color: rgb(33, 33, 33);
    margin-bottom: 5px;
  }
  .counter__date {
    margin: 0;
    font-weight: 400;
    font-size: 10px;
  }
  .count__icon {
    width: 50px;
    height: 50px;
    display: inline-flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 10px;
  }
  .count-icon__mute {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: 1;
    position: absolute;
  }
`
export default function CountFour({
  itemCount,
  itemName,
  icon,
  itemDate,
  iconBg,
}: {
  itemCount: string
  itemName: string
  style?: object
  icon: ReactElement
  itemDate: string
  iconBg: string
}) {
  return (
    <Styles>
      <div>
        <h4 className="counter__header">{itemName}</h4>
        <p className="counter__text">{itemCount}</p>
        <p className="counter__date">{itemDate}</p>
      </div>
      <div className="count__icon">
        <div className="count-icon__mute" style={{ backgroundColor: iconBg }} />
        {icon}
      </div>
    </Styles>
  )
}
