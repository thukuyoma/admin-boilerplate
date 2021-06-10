import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  position: absolute;
  top: 90px;
  right: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  width: 183px;
  box-shadow: 0 3px 12px rgb(27 31 35 / 15%);
`
const OverlayDisplayItem = styled.div`
  padding: 10px;
  color: #0c4284;
`

export default function OverlayDisplay({
  top,
  left,
  right,
  bottom,
}: //   overlayItems,
{
  top?: string
  left?: string
  right?: string
  bottom?: string
  //   overlayItems: Array<object>
}) {
  const overlayItems = [{ title: '' }]
  return (
    <Styles>
      <div
        style={{
          top: top && top,
          left: left && left,
          right: right && right,
          bottom: bottom && bottom,
        }}
      >
        HEllo
      </div>
    </Styles>
  )
}
