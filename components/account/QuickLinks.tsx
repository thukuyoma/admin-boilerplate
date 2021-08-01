import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  span {
    grid-row: 1;
    padding: 0 5px;
    :hover {
      text-decoration: underline;
      cursor: pointer;
      color: #0098db;
    }
  }
`
export default function QuickLinks() {
  const router = useRouter()
  const items = [
    { title: 'Register', url: '/accounts/register' },
    { title: 'Forgot Password', url: '/accounts/forgot-password' },
    { title: 'Request Verification', url: '/accounts/verification/request' },
  ]
  return (
    <Styles>
      {items.map((item) => (
        <span onClick={() => router.push(item.url)}>{item.title}</span>
      ))}
    </Styles>
  )
}
