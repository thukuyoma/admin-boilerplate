import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useQuery } from 'react-query'
import QueryPagination from '../../components/shared/QueryPagination'
import ServerError from '../../components/shared/ServerError'
import NotFound from '../../components/shared/NotFound'
import ServerLoadingLoader from '../../components/shared/ServerLoadingLoader'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import getPayments from '../../actions/payments/get-payments'
import PaymentListTable from '../../components/payments/PaymentsListTable'

export default function PaymentsIndex() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalPayments: 0,
    currentPage: page,
    payments: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['payments', page],
    () => getPayments({ page, limit }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
      },
    }
  )
  const handleNextPage = () => {
    if (!isPreviousData && query?.hasMore) {
      setPage((prev) => prev + 1)
    }
  }
  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: ` (${query.totalPayments})`, url: '/payments', isActive: true },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Payment"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && <PaymentListTable payments={query.payments} />}
            {isLoading && <ServerLoadingLoader message="Loading Payments" />}
            {isSuccess && !query.payments.length && <NotFound message="No Payment Found" />}
            {isError && <ServerError error={error} />}
            <QueryPagination
              nextPage={handleNextPage}
              prevPage={handlePrevPage}
              hasMore={query.hasMore}
              currentPage={query.currentPage}
              totalPages={query.totalPages}
              isFetching={isFetching}
            />
          </ScrollableContainer>
        </ContainerMainColumn>
      </ContainerMainWrapper>
    </Layout>
  )
}
