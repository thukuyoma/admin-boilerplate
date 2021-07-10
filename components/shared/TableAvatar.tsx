import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .card__tag {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background: #e3f2fd;
    color: #0098db;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
`
export default function TableAvatar({ initial, image }: { initial?: string; image?: string }) {
  return (
    <Styles>
      {initial && <div className="card__tag">{initial.charAt(0).toUpperCase()}</div>}
      {image && <div className="card__tag">{initial.toUpperCase()}</div>}
      {!initial && !image && <div className="card__tag">#</div>}
    </Styles>
  )
}
