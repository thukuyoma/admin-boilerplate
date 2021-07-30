import { IconHelp } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import supportsCount from '../../../actions/support/analytics/supports-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalSupports() {
  const { isLoading, data, isSuccess } = useQuery('total supports', supportsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Supports"
      icon={<IconHelp width={20} color="#0baee6" strokeWidth={2} />}
    />
  )
}
