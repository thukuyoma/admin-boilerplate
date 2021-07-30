import { IconUsers } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import usersCount from '../../../actions/users/analytics/users-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalUsers() {
  const { isLoading, data, isSuccess } = useQuery('total users', usersCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Users"
      icon={<IconUsers width={20} color="#0baee6" strokeWidth={2} />}
      style={{ borderRight: '1px solid #eeeeee' }}
    />
  )
}
