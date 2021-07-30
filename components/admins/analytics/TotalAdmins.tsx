import { IconUserCheck } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import adminsCount from '../../../actions/admins/analytics/admins-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalAdmins() {
  const { isLoading, data, isSuccess } = useQuery('total admins', adminsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Admins"
      icon={<IconUserCheck width={20} color="#0baee6" strokeWidth={2} />}
    />
  )
}
