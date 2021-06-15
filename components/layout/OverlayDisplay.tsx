import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  position: absolute;
  display: flex;
  top: ${({ top }) => top && top};
  right: ${({ right }) => right && right};
  left: ${({ left }) => left && left};
  bottom: ${({ bottom }) => bottom && bottom};
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  width: 183px;
  box-shadow: 0 3px 12px rgb(27 31 35 / 15%);
  z-index: 3;
`
const OverlayDisplayItem = styled.div`
  padding: 10px;
  color: #0c4284;
  cursor: pointer;
`

export default function OverlayDisplay({
  bottom,
  left,
  right,
  top,
  overlayItems,
}: {
  top?: string
  left?: string
  right?: string
  bottom?: string
  overlayItems: Array<{ url: string; title: string; isActive: boolean }>
}) {
  const router = useRouter()
  return (
    <>
      {overlayItems.length ? (
        <Styles
          top={top && top}
          left={left && left}
          right={right && right}
          bottom={bottom && bottom}
        >
          {overlayItems.map((overlayItem) => (
            <OverlayDisplayItem
              onKeyPress={() => router.push(overlayItem.url)}
              onClick={() => router.push(overlayItem.url)}
              key={overlayItem.url}
            >
              {overlayItem.title}
            </OverlayDisplayItem>
          ))}
        </Styles>
      ) : null}
    </>
  )
}
