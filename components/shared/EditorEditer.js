/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
import styled from 'styled-components'
import 'draft-js/dist/Draft.css'
import { AiOutlineUnderline, AiOutlineBold, AiOutlineItalic } from 'react-icons/ai'

const Styles = styled.div`
  border: 1px solid #ececec;
  padding: 10px;
  border-radius: 4px;
  .DraftEditor-root {
    min-height: 40vh;
    line-height: 30px;
  }
  .editor__guide {
    background: red;
  }
  .public-DraftEditorPlaceholder-inner {
    position: absolute;
  }
  .static__toolbar {
    display: flex;
    h3 {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .toolbar {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`

export default class EditorEditer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.body))),
    }

    this.focus = () => this.editor.focus()
  }

  onChange = (editorState) => {
    this.setState({ editorState })
    this.setState({
      editorState,
    })
    const editorBody = convertToRaw(editorState.getCurrentContent())
    this.props.handleSetBody(JSON.stringify(editorBody))
  }

  onClickEditor = () => {
    this.focus()
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  toggleToolbar = (inlineStyle) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle))
  }

  render() {
    const { editorState } = this.state

    function myBlockStyleFn(contentBlock) {
      const type = contentBlock.getType()
      if (type === 'blockquote') {
        return 'superFancyBlockquote'
      }
      return null
    }

    return (
      <Styles>
        <div
          ref={(elem) => {
            this.elemWidth = elem ? elem.clientWidth : 0
            this.elemHeight = elem ? elem.clientHeight : 0
          }}
          className="toolbar"
        >
          <ToolBar editorState={editorState} onToggle={this.toggleToolbar} />
        </div>
        <div onClick={this.onClickEditor} onBlur={this.checkSelectedText} className="editor">
          <Editor
            className="editor__guide"
            customStyleMap={styleMap}
            blockStyleFn={myBlockStyleFn}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            editorKey="foobar"
            spellCheck
            ref={(element) => {
              this.editor = element
            }}
          />
        </div>
      </Styles>
    )
  }
}

// Custom overrides for each style
const styleMap = {
  CODE: {
    backgroundColor: 'red',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: '20px',
    padding: 4,
  },
  BOLD: {
    // color: '#395296',
    fontWeight: 'bold',
  },
  SPAN: {
    lineHeight: '35px',
  },
  // ANYCUSTOMSTYLE: {
  //   color: '#00e400',
  // },
}

class ToolbarButton extends Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    const buttonStyle = {
      paddingRight: 10,
    }
    return (
      <span className="tooler" onMouseDown={this.onToggle} style={buttonStyle}>
        {this.props.label}
      </span>
    )
  }
}

let toolbarItems = [
  { label: <AiOutlineBold />, style: 'BOLD' },
  { label: <AiOutlineItalic />, style: 'ITALIC' },
  { label: <AiOutlineUnderline />, style: 'UNDERLINE' },
]

const ToolBar = (props) => {
  let currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div>
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.style}
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={props.onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  )
}
