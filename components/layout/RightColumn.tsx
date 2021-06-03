import React from 'react'
import styled from 'styled-components'
import config from '../../config/config'
import useAuth from '../../context/auth'

const Styles = styled.div``

export default function RightColumn() {
  const {} = useAuth()
  return <div>Welcome Theophilus</div>
}
