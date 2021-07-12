import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: inline;
  margin: 0 10px;
  font-size: 12px;
`
export default function InputWordsCounter({
  words,
  max,
  isWord,
}: {
  words: string
  max: number
  isWord?: boolean
}) {
  if (isWord) {
    return (
      <Styles>
        ({words.split(' ').length}/
        <span className="max" style={{ color: words.length > max ? 'red' : '#4cd964' }}>
          {max}
        </span>
        )
      </Styles>
    )
  } else {
    return (
      <Styles>
        ({words.length} /
        <span className="max" style={{ color: words.length > max ? 'red' : '#4cd964' }}>
          {max}
        </span>
        )
      </Styles>
    )
  }
}
