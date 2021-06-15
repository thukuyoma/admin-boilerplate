import React, { useState } from 'react'
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import styled from 'styled-components'

const Styles = styled.div`
  .DraftEditor-root {
    line-height: 30px;
    font-size: 14px;
  }
`

export default function EditorReader({ body }) {
  const [editorState] = useState(EditorState.createWithContent(convertFromRaw(body)))
  return (
    <Styles>
      <Editor editorState={editorState} readOnly />
    </Styles>
  )
}
