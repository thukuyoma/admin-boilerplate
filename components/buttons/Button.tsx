/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import React, { ReactElement, SyntheticEvent } from 'react'
import Loader from 'react-loader-spinner'

const Styles = styled.div`
  display: ${(block) => (block ? 'flex' : 'inline-flex')};
  justify-content: ${({ align }) =>
      (align === 'left' && 'flex-start;') ||
      (align === 'center' && 'center;') ||
      (align === 'right' && 'flex-end;')}
    button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
    color: #fff;
    border: 0;
    ${({ size }) =>
      (size === 'small' && 'height: 30px; font-size: 13px;') ||
      (size === 'medium' && 'height: 36px; font-size: 14px;') ||
      (size === 'large' && 'height: 42px; font-size: 15px;')}
    ${({ curved }) => curved && 'border-radius: 50px;'}
  }
  .filled {
    ${({ color }) => color === 'primary' && 'background-color: #0098db; color: #fff;'}
    ${({ color }) => color === 'secondary' && 'background-color: #6c757d; color: #fff;'}
    ${({ color }) => color === 'success' && 'background-color: #6aea87; color: #fff;'}
    ${({ color }) => color === 'danger' && 'background-color: #dc3545; color: #fff;'}
    ${({ color }) => color === 'warning' && 'background-color: #ffc107; color: #212529;'}
    ${({ color }) => color === 'info' && 'background-color: #17a2b8; color: #fff;'}
    ${({ color }) => color === 'light' && 'background-color: #f8f9fa; color: #212529;'}
    ${({ color }) => color === 'dark' && 'background-color: #343a40; color: #fff;'}
    ${({ color }) => color === 'link' && 'border: none; color: #0098db;'}
    :hover {
      ${({ color }) => color === 'primary' && 'background-color: #1d8fc2; color: #fff;'}
      ${({ color }) => color === 'secondary' && 'background-color: #545b62; color: #fff;'}
      ${({ color }) => color === 'success' && 'background-color: #47fc70; color: #fff;'}
      ${({ color }) => color === 'danger' && 'background-color: #c82333; color: #fff;'}
      ${({ color }) => color === 'warning' && 'background-color: #e0a800; color: #212529;'}
      ${({ color }) => color === 'info' && 'background-color: #138496; color: #fff;'}
      ${({ color }) => color === 'light' && 'background-color: #dae0e5; color: #212529;'}
      ${({ color }) => color === 'dark' && 'background-color: #343a40; color: #fff;'}
      ${({ color }) => color === 'link' && 'border: none; text-decoration: underline;'}
    }
  }
  .outlined {
    outline: 0;
    border: 1px solid;
    background: #fff;
    ${({ color }) => color === 'primary' && 'border-color: #0098db; color: #0098db;'}
    ${({ color }) => color === 'secondary' && 'border-color: #6c757d; color: #6c757d;'}
    ${({ color }) => color === 'success' && 'border-color: #6aea87; color: #6aea87;'}
    ${({ color }) => color === 'danger' && 'border-color: #dc3545; color: #dc3545;'}
    ${({ color }) => color === 'warning' && 'border-color: #ffc107; color: #ffc107;'}
    ${({ color }) => color === 'info' && 'border-color: #17a2b8; color: #17a2b8;'}
    ${({ color }) => color === 'light' && 'border-color: #f8f9fa; color: #212529;'}
    ${({ color }) => color === 'dark' && 'border-color: #343a40; color: #343a40;'}
    ${({ color }) => color === 'link' && 'border: none; color: #0098db;'}
    :hover {
      ${({ color }) => color === 'primary' && 'background-color: #0098db; color: #fff;'}
      ${({ color }) => color === 'secondary' && 'background-color: #6c757d; color: #fff;'}
      ${({ color }) => color === 'success' && 'background-color: #6aea87; color: #fff;'}
      ${({ color }) => color === 'danger' && 'background-color: #dc3545; color: #fff;'}
      ${({ color }) => color === 'warning' && 'background-color: #ffc107; color: #fff;'}
      ${({ color }) => color === 'info' && 'background-color: #17a2b8; color: #fff;'}
      ${({ color }) => color === 'light' && 'background-color: #dae0e5; color: #212529;'}
      ${({ color }) => color === 'dark' && 'background-color: #343a40; color: #fff;'}
      ${({ color }) => color === 'link' && 'border: none; text-decoration: underline;'}
    }
  }
  .button-icon__start {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-icon__end {
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`
type Variants = 'outlined' | 'filled'
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
type Sizes = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

interface ButtonProps {
  block?: boolean
  title: string
  onClick?: (e: SyntheticEvent) => Promise<unknown> | unknown
  loading?: boolean
  align?: Align
  style?: object
  disabled?: boolean
  startIcon?: ReactElement
  endIcon?: ReactElement
  icon?: ReactElement
  iconOnly?: boolean
  curved?: boolean
  variant: Variants
  size: Sizes
  color: Colors
}

export default function Button({
  block,
  style,
  title,
  onClick,
  loading,
  align,
  disabled = false,
  variant,
  startIcon,
  endIcon,
  curved,
  size,
  color,
}: ButtonProps) {
  return (
    <Styles color={color} variant={variant} size={size} curved={curved} align={align}>
      <div className={`button__wrapper ${block && 'block'} ${align}`}>
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={`${variant}`}
          style={{
            ...style,
          }}
        >
          {startIcon && <span className="button-icon__start">{startIcon}</span>}
          {title}
          {endIcon && <span className="button-icon__end">{endIcon}</span>}
          <span>
            {loading && (
              <Loader
                style={{ marginLeft: '5px' }}
                type="Oval"
                color="black"
                height={15}
                width={15}
              />
            )}
          </span>
        </button>
      </div>
    </Styles>
  )
}
