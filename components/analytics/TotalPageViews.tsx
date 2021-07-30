import { IconNotebook } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import totalPageViews from '../../actions/analytics/total-page-views'
import kFormatter from '../../utils/k-formatter'
import CountFive from './counters/CountFIve'

export default function TotalPageViews() {
  const { isLoading, data, isSuccess } = useQuery('total page view', totalPageViews)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Total Page Views"
        icon={<IconNotebook width={20} color="#F44A36" strokeWidth={2} />}
      />
    </>
  )
}
