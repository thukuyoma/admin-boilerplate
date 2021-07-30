import { IconUsers } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import dailyUniqueVisitors from '../../actions/analytics/daily-unique-visitors'
import kFormatter from '../../utils/k-formatter'
import CountFive from './counters/CountFIve'

export default function DailyUniqueVisitors() {
  const { isLoading, data, isSuccess } = useQuery('daily unique visitors', dailyUniqueVisitors)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data?.todayUniqueVisitors, 2)}
        itemName="Today Unique Visitors"
        icon={<IconUsers width={20} color="rgb(0, 200, 83)" strokeWidth={2} />}
      />
    </>
  )
}
