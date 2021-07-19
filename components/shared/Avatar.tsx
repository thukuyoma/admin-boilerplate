import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .card__tag {
    height: 40px;
    width: 40px;
    ${({ size }) =>
      (size === 'small' && 'height: 25px; width: 25px;') ||
      (size === 'medium' && 'height: 30px; width: 30px;') ||
      (size === 'large' && 'height: 40px; width: 40px;')}
    border-radius: 50px;
    background: #e3f2fd;
    color: #0098db;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  .avatar__image {
    height: 40px;
    width: 40px;
    border-radius: 50px;
  }
`
export default function Avatar({
  initial,
  image,
  size,
}: {
  initial?: string
  image?: string
  size: 'small' | 'medium' | 'large'
}) {
  if (image) {
    return (
      <Styles>
        <div className="card__tag">
          <img className="avatar__image" src={image} />
        </div>
      </Styles>
    )
  }
  if (initial) {
    return (
      <Styles size={size}>
        {initial && <div className="card__tag">{initial.charAt(0).toUpperCase()}</div>}
        {!initial && !image && <div className="card__tag">#</div>}
      </Styles>
    )
  }
  return <Styles>{<div className="card__tag">#</div>}</Styles>
}
