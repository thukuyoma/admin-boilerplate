import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

export default function ScrollableContainer({ children }) {
  return <Scrollbars style={{ height: 450 }}>{children}</Scrollbars>
}
