import { IconMail } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import subscribersCount from '../../../actions/newsletter/analytics/subscribers-count'
import kFormatter from '../../../utils/k-formatter'
import CountFive from '../../analytics/counters/CountFIve'

export default function TotalNewsletterSubscribers() {
  const { isLoading, data, isSuccess } = useQuery('total subscribers count', subscribersCount)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Newsletter Subscriber"
        icon={<IconMail width={20} color="#5a9b8a" strokeWidth={2} />}
      />
    </>
  )
}
