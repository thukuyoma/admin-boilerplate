import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  .status__title {
    margin: 0 5px;
  }
  .status__icon {
    color: #0098db;
  }
  .status__checked {
    color: #68da68;
  }
  .status__unchecked {
    color: #f90;
  }
`

export default function ItemStatus({
  statusTitle,
  status,
}: {
  statusTitle: string
  status: boolean
}) {
  return (
    <Styles>
      <RiCheckboxBlankCircleFill className="status__icon" />
      <span className="status__title">{capitalizeFirstLetter(statusTitle)} Status</span>
      {status ? (
        <BsCheckCircle className="status__checked" />
      ) : (
        <FaRegTimesCircle className="status__unchecked" />
      )}
    </Styles>
  )
}
