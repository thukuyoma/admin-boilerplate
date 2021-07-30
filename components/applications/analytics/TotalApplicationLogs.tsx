import { IconWritingSign } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import applicationLogsCount from '../../../actions/application/analytics/application-logs-count'
import kFormatter from '../../../utils/k-formatter'
import CountFive from '../../analytics/counters/CountFIve'

export default function TotalApplicationLogs() {
  const { isLoading, data, isSuccess } = useQuery('application logs count', applicationLogsCount)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Total Application Logs"
        icon={<IconWritingSign width={20} color="#ff59b9" strokeWidth={2} />}
      />
    </>
  )
}
