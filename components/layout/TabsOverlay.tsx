import { useRouter } from 'next/router'
import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import styled from 'styled-components'

const Styles = styled.div`
  position: absolute;
  background-color: #f3f8fe;
  width: 362px;
  height: 100vh;
  top: 60px;
  right: 0;
  padding: 20px 10px;
`

export default function TabsOverlay({ children }) {
  return <Styles>{children}</Styles>
}
