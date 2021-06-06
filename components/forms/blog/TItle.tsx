import React from 'react'
import styled from 'styled-components'

const Control = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`

const TextInput = styled.input`
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  padding: 10px 10px;
  width: 100%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    border: 1px solid #0098db;
    outline: 1px solid #0098db;
  }
`
const Must = styled.span`
  color: red;
`
export default function TItle() {
  return (
    <Control>
      <Title>
        Title <Must>*</Must>
      </Title>
      <TextInput placeholder="Title of post" />
    </Control>
  )
}
