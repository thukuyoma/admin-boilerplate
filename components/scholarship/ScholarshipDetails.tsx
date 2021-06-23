import React from 'react'

export default function ScholarshipDetails({ scholarship }) {
  return (
    <div>
      <p>{scholarship.title}</p>
      <p>{scholarship.country}</p>
      <p>{scholarship.organization}</p>
    </div>
  )
}
