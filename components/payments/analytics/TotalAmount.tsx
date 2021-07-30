import { IconCurrencyNaira } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import totalAmount from '../../../actions/payments/analytics/total-amount'
import kFormatter from '../../../utils/k-formatter'
import CountTwo from '../../analytics/counters/CountTwo'

export default function TotalAmount() {
  const { isLoading, data, isSuccess } = useQuery('total amount', totalAmount)
  return (
    <CountTwo
      itemCount={kFormatter(data, 2)}
      itemName="Total Amount"
      iconBg="#11c15b"
      icon={<IconCurrencyNaira color="#fff" strokeWidth={2} />}
      style={{ marginBottom: 30 }}
    />
  )
}
