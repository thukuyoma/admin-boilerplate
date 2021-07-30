import { IconEye, IconFriends, IconNotebook } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import dailyPageViews from '../../actions/analytics/daily-page-views'
import kFormatter from '../../utils/k-formatter'
import CountFive from './counters/CountFIve'

export default function DailyPageViews() {
  const { isLoading, data, isSuccess } = useQuery('daily page views', dailyPageViews)
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <CountFive
        // itemCount={kFormatter(2000, 2)}
        itemCount={kFormatter(data?.todayPageView, 2)}
        itemName="Today Page Views"
        icon={<IconNotebook width={20} color="rgb(255, 193, 7)" strokeWidth={2} />}
      />
    </>
  )
}
