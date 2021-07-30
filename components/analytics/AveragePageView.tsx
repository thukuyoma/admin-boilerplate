import { IconNotebook } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import averagePageViews from '../../actions/analytics/average-page-views'
import kFormatter from '../../utils/k-formatter'
import CountFive from './counters/CountFIve'

export default function AveragePageViews() {
  const { isLoading, data, isSuccess } = useQuery('average page views', averagePageViews)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Average Page Views"
        icon={<IconNotebook width={20} color="rgb(30, 136, 229)" strokeWidth={2} />}
      />
    </>
  )
}
