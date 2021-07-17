import React from 'react'

import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

const Styles = styled.button`
  outline: 0;
  border: 1px solid;
  background: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 50px;
  ${({ color }) => color === 'primary' && 'border-color: #0098db; color: #0098db;'}
  ${({ color }) => color === 'secondary' && 'border-color: #6c757d; color: #6c757d;'}
${({ color }) => color === 'success' && 'border-color: #6aea87; color: #6aea87;'}
${({ color }) => color === 'danger' && 'border-color: #dc3545; color: #dc3545;'}
${({ color }) => color === 'warning' && 'border-color: #ffc107; color: #ffc107;'}
${({ color }) => color === 'info' && 'border-color: #17a2b8; color: #17a2b8;'}
${({ color }) => color === 'light' && 'border-color: #f8f9fa; color: #212529;'}
${({ color }) => color === 'dark' && 'border-color: #343a40; color: #343a40;'}
`
export default function StatusButton({ title, color }: { title: string; color: Colors }) {
  return <Styles color={color}>{capitalizeFirstLetter(title)}</Styles>
}
