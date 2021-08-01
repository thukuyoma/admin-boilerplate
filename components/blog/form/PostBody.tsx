import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import DisplayInputError from './../../forms/DisplayInputError'

const EditorWriter = dynamic(() => import('./../../shared/EditorWriter'), { ssr: false })
const EditorEditer = dynamic(() => import('./../../shared/EditorEditer'), { ssr: false })

const Styles = styled.div`
  .editor__wrapper {
    margin-top: 10px;
    margin-bottom: 30px;
    padding-top: 10px;
  }
`
export default function PostBody({ handleSetBody, inputErrors, postBody, isRequired }) {
  return (
    <Styles>
      <div
        className="editor__wrapper"
        style={{ boxShadow: inputErrors.body && '0 0 0 0.2rem #f28da0' }}
      >
        <h3 className="editor__title">
          Body {isRequired && <span style={{ color: postBody.length ? '#4cd964' : 'red' }}>*</span>}
        </h3>
        {postBody ? (
          <EditorEditer body={postBody} handleSetBody={handleSetBody} inputErrors={inputErrors} />
        ) : (
          <EditorWriter
            error={inputErrors.postBody}
            handleSetBody={handleSetBody}
            inputErrors={inputErrors}
          />
        )}
        {inputErrors.postBody && <DisplayInputError error={inputErrors.postBody} />}
      </div>
    </Styles>
  )
}
