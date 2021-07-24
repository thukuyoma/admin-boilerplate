import React from 'react'
import styled from 'styled-components'
import Loader from '../shared/Loader'

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

interface IconButtonI {
  size: 'small' | 'medium' | 'large'
  label?: string
  color?: Colors
  children: React.ReactNode
  loading?: boolean
  onClick: () => void
  block?: boolean
  style?: {
    marginRight?: number
    marginLeft?: number
    marginBottom?: number
    marginTop?: number
  }
}

const Styles = styled.button`
  outline: 0;
  border: oldlace;
  background: inherit;
  ${({ size }) =>
    (size === 'small' && 'height: 30px; width: 30px;') ||
    (size === 'medium' && 'height: 36px; width: 36px;') ||
    (size === 'large' && 'height: 42px; width: 42px;')}
  :hover {
    background-color: #e2e2e2;
  }
  border-radius: 50px;
  flex-shrink: 0;
  display: ${(block) => (block ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  font-size: 50px;
  cursor: pointer;
  .icon {
    ${({ color }) => color === 'primary' && 'color: #0098db;'}
    ${({ color }) => color === 'secondary' && 'color: #6c757d;'}
    ${({ color }) => color === 'success' && 'color: #6aea87;'}
    ${({ color }) => color === 'danger' && 'color: #dc3545;'}
    ${({ color }) => color === 'warning' && 'color: #ffc107;'}
    ${({ color }) => color === 'info' && 'color: #17a2b8;'}
    ${({ color }) => color === 'light' && 'color: #f8f9fa;'}
    ${({ color }) => color === 'dark' && 'color: #343a40;'}
    ${({ size }) =>
      (size === 'small' && 'height: 10px; width: 10px;') ||
      (size === 'medium' && 'height: 16px; width: 16px;') ||
      (size === 'large' && 'height: 22px; width: 22px;')}
  }
`
export default function IconButton({
  size,
  label,
  color,
  children,
  style,
  loading,
  onClick,
  block,
}: IconButtonI) {
  return (
    <Styles
      disabled={loading}
      color={color}
      size={size}
      style={style}
      className="icon"
      onClick={onClick}
    >
      {!loading ? children : <Loader width={13} isLoading={loading} />}
    </Styles>
  )
}
