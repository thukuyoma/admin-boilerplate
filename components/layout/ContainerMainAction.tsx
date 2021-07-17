import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  padding: 0 0 0 20px;
  width: 200px;
  flex-shrink: 0;
  .container-main-action__title {
    height: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #0c4284;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
    margin-bottom: 50px;
    .action-button__wrapper {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`
export default function ContainerMainAction({ children }) {
  return (
    <Styles>
      <div className="container-main-action__title">Actions</div>
      {<div className="action-button__wrapper">{children}</div>}
    </Styles>
  )
}
