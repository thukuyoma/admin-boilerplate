import { IconSchool } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import scholarshipsCount from '../../../actions/scholarship/analytics/scholarships-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalScholarships() {
  const { isLoading, data, isSuccess } = useQuery('total scholarships', scholarshipsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Scholarships"
      icon={<IconSchool width={20} color="#0baee6" strokeWidth={2} />}
      style={{ borderRight: '1px solid #eeeeee' }}
    />
  )
}
