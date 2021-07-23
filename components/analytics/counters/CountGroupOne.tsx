import React from 'react'
import CountOne from './CountOne'
import styled from 'styled-components'
import { IconVolume } from '@tabler/icons'

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
        <CountOne
          itemCount="10K"
          itemName="visitors"
          style={{ borderRight: '1px solid #eeeeee' }}
          icon={<IconVolume width={20} color="#0098db" strokeWidth={1.5} />}
        />
        <CountOne
          itemCount="10K"
          itemName="visitors"
          icon={<IconVolume width={20} strokeWidth={1.5} color="#0098db" />}
        />
      </div>
      <div className="count-group__bottom">
        <CountOne
          itemCount="10K"
          itemName="visitors"
          style={{ borderRight: '1px solid #eeeeee' }}
          icon={<IconVolume width={20} color="#0098db" strokeWidth={1.5} />}
        />
        <CountOne
          itemCount="10K"
          itemName="visitors"
          icon={<IconVolume width={20} color="#0098db" strokeWidth={1.5} />}
        />
      </div>
    </Styles>
  )
}
