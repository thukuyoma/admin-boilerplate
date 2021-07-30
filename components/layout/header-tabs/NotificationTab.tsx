import React, { useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import getAdminNotifications from '../../../actions/notifications/get-admin-notifications'
import NotificationCard from '../../notifications/NotificationCard'
import HeaderTabTitle from './HeaderTabTitle'
import TabsOverlay from './TabsOverlay'
import Loader from 'react-loader-spinner'
import useGlobalState from '../../../context/global'

const Styles = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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

export default function NotificationTab({ showNotification }) {
  const { setNotificationCount } = useGlobalState()
  const limit: number = 4
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState({
    hasMore: true,
    totalPages: 0,
    totalAdminAnnouncements: 0,
    currentPage: 1,
    adminAnnouncements: [],
  })
  const { refetch, isFetching, isSuccess, data, isPreviousData } = useQuery(
    ['admin notifications', page, limit],
    () => getAdminNotifications({ page, limit }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
        setNotificationCount(data.totalAdminAnnouncements)
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
    <>
      {showNotification && (
        <Styles>
          <TabsOverlay>
            <HeaderTabTitle>
              Notifications
              {isFetching && (
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
            </HeaderTabTitle>
            {isSuccess &&
              query.adminAnnouncements.map((item) => (
                <NotificationCard key={item._id} item={item} refetch={refetch} />
              ))}
            {isSuccess && query?.totalPages > 1 ? (
              <div className="pagination">
                <HiArrowNarrowLeft
                  onClick={() => handlePrevPage()}
                  onKeyPress={() => handlePrevPage()}
                  className="pagination__control"
                  style={{ color: data?.currentPage === 1 && 'gray' }}
                />
                <div className="pagination__number">{data?.currentPage}</div>
                {isFetching && (
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
                <div className="pagination__number">{data?.totalPages}</div>
                <HiArrowNarrowRight
                  onClick={() => handleNextPage()}
                  onKeyPress={() => handleNextPage()}
                  className="pagination__control"
                  style={{ color: !data?.hasMore && 'gray' }}
                />
              </div>
            ) : null}
          </TabsOverlay>
        </Styles>
      )}
    </>
  )
}
