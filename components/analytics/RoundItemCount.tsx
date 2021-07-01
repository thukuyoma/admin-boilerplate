import React from 'react'
import { HiTrendingUp } from 'react-icons/hi'
import styled from 'styled-components'

const Styles = styled.div`
  width: 180px;
  background: #ffffff;
  margin-right: 20px;
  margin-bottom: 20px;
  .numbers {
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    color: #8e8e8e;
    margin: 0;
  }
  .percent {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .percent__name {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #8e8e8e;
    margin-right: 5px;
  }
  .percent-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 21px;
    background: #c3ee83;
    border-radius: 5px;
  }
  .percent-number__icon {
    font-size: 14px;
    line-height: 17px;
    color: #8e8e8e;
    margin-right: 5px;
  }
  .percent-number__count {
    font-size: 14px;
    line-height: 17px;
    color: #489019;
  }
`
export default function RoundItemCount() {
  return (
    <Styles style={{ borderRight: '1px solid #DDDDDD' }}>
      <p className="numbers">2,223,214</p>
      <div className="percent">
        <div className="percent__name">Total View</div>
        <div className="percent-number">
          <HiTrendingUp className="percent-number__icon" />
          <div className="percent-number__count">+22</div>
        </div>
      </div>
    </Styles>
  )
}
