import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  ${({ size }) =>
    (size === 'small' && 'height: 25px; width: 25px; font-size: 13px;') ||
    (size === 'medium' && 'height: 30px; width: 30px; font-size: 16px;') ||
    (size === 'large' && 'height: 40px; width: 40px; font-size: 20px;') ||
    (size === 'extraLarge' && 'height: 100px; width: 100px; font-size: 25px;')}
  border-radius: 50px;
  background: #e3f2fd;
  color: #0098db;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    border-radius: 50px;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
`
export default function Avatar({
  initial,
  image,
  size,
  style,
}: {
  initial?: string
  image?: string
  size: 'small' | 'medium' | 'large' | 'extraLarge'
  style?: {
    backgroundColor?: string
    color?: string
    height?: number
    width?: number
    borderRadius?: number
    marginRight?: number
    marginLeft?: number
    marginBottom?: number
    marginTop?: number
  }
}) {
  if (image) {
    return (
      <Styles size={size} style={style}>
        <img src={image} alt="" />
      </Styles>
    )
  }
  if (initial) {
    return (
      <Styles style={style} size={size}>
        {initial && initial.charAt(0).toUpperCase()}
        {!initial && !image && '#'}
      </Styles>
    )
  }
  return (
    <Styles style={style} size={size}>
      #
    </Styles>
  )
}
