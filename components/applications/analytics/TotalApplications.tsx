import { IconForms } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import applicationsCount from '../../../actions/application/analytics/applications-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalApplications() {
  const { isLoading, data, isSuccess } = useQuery('total applications', applicationsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Applications"
      icon={<IconForms width={20} color="#673ab7" strokeWidth={1.5} />}
      style={{ borderRight: '1px solid #eeeeee' }}
    />
  )
}
