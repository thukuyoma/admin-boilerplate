import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 50px;

  button {
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 5px 10px;
    .icon {
      color: #0098db;
      font-size: 25px;
    }
    :hover {
      background: #c5c5c5;
    }
  }
  span {
    padding: 5px;
    color: #0098db;
  }
`

export default function QueryPagination({
  nextPage,
  prevPage,
  hasMore,
  currentPage,
  totalPages,
  isFetching,
}) {
  return (
    <>
      {totalPages > 1 ? (
        <Styles>
          <button type="button" onClick={() => prevPage()}>
            <HiArrowNarrowLeft className="icon" style={{ color: currentPage === 1 && 'gray' }} />
          </button>
          {isFetching ? (
            <div style={{ paddingTop: '5px' }}>
              <Loader type="TailSpin" color="#0098db" height={20} width={20} />
            </div>
          ) : null}
          <span>{currentPage}</span> of
          <span style={{ color: '#0098db' }}>{totalPages}</span>
          <button type="button" onClick={() => nextPage()}>
            <HiArrowNarrowRight className="icon" style={{ color: !hasMore && 'gray' }} />
          </button>
        </Styles>
      ) : null}
    </>
  )
}
