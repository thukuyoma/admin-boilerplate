import { IconArrowNarrowDown, IconArrowNarrowUp } from '@tabler/icons'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  margin-bottom: 10px;
  color: #616161;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  background-image: none;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(144, 202, 249, 0.46);

  :hover {
    background-color: #448aff;
    color: #fff;
  }

  .count__header {
    margin: 0;
    font-size: 14px;
  }
  .count__icon {
    display: flex;
    align-items: center;
    margin: 15px 0;
    font-size: 20px;
    > * {
      &:first-child {
        margin-right: 15px;
      }
    }
  }
  .count__text {
    margin: 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
  }
`
export default function CountThree({
  itemCount,
  itemName,
  percentageChange,
  icon,
}: {
  itemCount?: string
  itemName?: string
  icon?: ReactElement
  percentageChange?: number
}) {
  return (
    <Styles>
      <h6 className="count__header">{itemName}</h6>
      <div className="count__icon">
        {/* {percentageChange > 0 ? <IconArrowNarrowUp /> : <IconArrowNarrowDown />} */}
        <span>{itemCount}</span>
      </div>
      <p className="count__text">{percentageChange}</p>
    </Styles>
  )
}
