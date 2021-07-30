/* eslint-disable no-underscore-dangle */
import styled from 'styled-components'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import moment from 'moment'
import Loader from 'react-loader-spinner'
import { RiRefreshLine } from 'react-icons/ri'
import useAuth from '../../context/auth'
import getAdminActiviesLog from '../../actions/account/get-admin-activities-log'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import HeaderTabTitle from './header-tabs/HeaderTabTitle'
import Avatar from '../shared/Avatar'

const Styles = styled.div`
  .activity {
    margin-right: 10px;
  }
  .time {
    font-weight: 500;
    font-style: italic;
    color: gray;
    margin-left: 10px;
  }
  .logger {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .refetch {
    margin: 0 10px;
    color: orange;
    cursor: pointer;
  }
  .loader__window {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination__control {
    color: orange;
    margin: 0 10px;
    cursor: pointer;
  }
  .pagination__number {
    color: #385c78;
    padding: 2px 5px;
    border: 1.5px solid #ccc;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 5px;
    font-size: 12px;
  }
`
export default function ActivityLogs() {
  const { profile } = useAuth()
  const [page, setPage] = useState<number>(1)
  const limit: number = 10
  const adminId: string = profile?._id
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalActionLogs: 0,
    currentPage: page,
    actionLogs: [],
  })

  const { refetch, isFetching, data, isLoading, isPreviousData } = useQuery(
    ['adminActionsLog', page, adminId],
    () => getAdminActiviesLog({ page, limit, adminId: profile?._id }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
      },
    }
  )
  const handleNextPage = () => {
    if (!isPreviousData && data?.hasMore) {
      setPage((prev) => prev + 1)
    }
  }
  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }
  return (
    <Styles>
      <HeaderTabTitle>
        Recent Activities
        <RiRefreshLine className="refetch" onClick={() => refetch()} />
        {isFetching && (
          <Loader style={{ display: 'flex' }} type="Oval" color="black" height={12} width={12} />
        )}
      </HeaderTabTitle>

      <>
        {isLoading && (
          <div className="loader__window">
            <Loader
              style={{ marginLeft: '5px' }}
              type="Oval"
              color="black"
              height={15}
              width={15}
            />
          </div>
        )}
        {query?.actionLogs.map((action) => (
          <div key={action._id} className="logger">
            <Avatar
              image={profile?.avatar?.url}
              initial={action.createdBy.adminFullName}
              size="small"
              style={{ marginRight: 10 }}
            />
            <div className="activity">
              {capitalizeFirstLetter(action.activity)}
              <span className="time">{moment(action.timestamp).startOf('hour').fromNow()}</span>
            </div>
          </div>
        ))}
        {query?.totalPages > 1 ? (
          <div className="pagination">
            <HiArrowNarrowLeft
              onClick={() => handlePrevPage()}
              onKeyPress={() => handlePrevPage()}
              className="pagination__control"
              style={{ color: data?.currentPage === 1 && 'gray' }}
            />
            <div className="pagination__number">{data?.currentPage}</div>
            {isFetching && (
              <Loader
                style={{ margin: '0 10px', display: 'flex' }}
                type="Oval"
                color="black"
                height={12}
                width={12}
              />
            )}
            <div className="pagination__number">{data?.totalPages}</div>
            <HiArrowNarrowRight
              onClick={() => handleNextPage()}
              onKeyPress={() => handleNextPage()}
              className="pagination__control"
              style={{ color: !data?.hasMore && 'gray' }}
            />
          </div>
        ) : null}
      </>
    </Styles>
  )
}
