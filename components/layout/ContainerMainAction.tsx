import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  padding: 0 0 0 20px;
  width: 300px;
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
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 500px) {
  }
`
export default function ContainerMainAction() {
  return (
    <Styles>
      <div className="container-main-action__title">Actions</div>
    </Styles>
  )
}
