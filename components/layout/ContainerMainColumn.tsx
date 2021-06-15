import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  border-right: 1px solid #e7e7e7;
  @media (max-width: 1000px) {
    border-right: none;
    padding-right: 0;
  }
`
export default function ContainerMainColumn({ children }) {
  return <Styles>{children}</Styles>
}
