import React from 'react'

export default function AlertCard({ alert }) {
  return (
    <div>
      <p>{alert.timestamp}</p>
      <p>{alert.message}</p>
    </div>
  )
}
