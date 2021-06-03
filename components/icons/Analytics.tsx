import React from 'react'

export default function Analytics(props) {
  return (
    <svg
      width={props.width ? props.width : 18}
      height={props.height ? props.height : 18}
      fill="none"
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9H2C1.44772 9 1 9.44772 1 10V16C1 16.5523 1.44772 17 2 17H6C6.55228 17 7 16.5523 7 16V10C7 9.44772 6.55228 9 6 9Z"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5H8C7.44772 5 7 5.44772 7 6V16C7 16.5523 7.44772 17 8 17H12C12.5523 17 13 16.5523 13 16V6C13 5.44772 12.5523 5 12 5Z"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 1H14C13.4477 1 13 1.44772 13 2V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V2C19 1.44772 18.5523 1 18 1Z"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 17H16"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
