import router from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  margin-bottom: 50px;
`
export default function ScholarshipCard({ scholarship }) {
  return (
    <Styles>
      <p>{scholarship.title}</p>
      <p>{scholarship.country}</p>
      <p>{scholarship.organization}</p>
      <button onClick={() => router.push(`/scholarships/${scholarship._id}`)}>VIEW MORE</button>
    </Styles>
  )
}
