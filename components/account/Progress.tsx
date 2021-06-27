import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  margin: 20px 10px;
  .progress {
    width: 300px;
    height: 4px;
    background: #e6e6e6;
    text-align: center;
    font-size: 14px;
    border-radius: 2px;
  }

  .bg-success {
    background: #fdbf00;
    border-radius: 2px;
    height: 4px;
  }

  .progress__text {
    font-size: 12px;
    color: gray;
    margin: 0;
  }
`

const Progress = ({ percentage }: { percentage: number }) => (
  <Styles>
    <p className="progress__text">{percentage}% to complete</p>
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </Styles>
)

export default Progress
