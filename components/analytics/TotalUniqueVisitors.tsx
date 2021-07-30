import { IconFriends } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import uniqueVisitorsCount from '../../actions/analytics/unique-visitors-count'
import kFormatter from '../../utils/k-formatter'
import CountTwo from './counters/CountTwo'

export default function TotalUniqueVisitors() {
  const { isLoading, data, isSuccess } = useQuery('total unique visitors', uniqueVisitorsCount)
  return (
    <CountTwo
      itemCount={kFormatter(data, 2)}
      itemName="Total Unique Visitors"
      iconBg="#11c15b"
      icon={<IconFriends color="#fff" strokeWidth={2} />}
    />
  )
}
