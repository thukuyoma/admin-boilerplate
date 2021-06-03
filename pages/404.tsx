import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
  }
`
export default function FourOhFour() {
  return (
    <>
      <Styles>
        <div className="container">
          <h1>404</h1>
          <h1>Page Not Found</h1>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </Styles>
    </>
  )
}
