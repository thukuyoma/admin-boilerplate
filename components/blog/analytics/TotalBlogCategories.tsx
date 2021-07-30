import { IconNews } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import blogCategoriesCount from '../../../actions/post/analytics/blog-categories-count'
import kFormatter from '../../../utils/k-formatter'
import CountFive from '../../analytics/counters/CountFIve'

export default function TotalBlogCategories() {
  const { isLoading, data, isSuccess } = useQuery('total blog categories', blogCategoriesCount)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Total Blog Categories"
        icon={<IconNews width={20} color="#3bf235" strokeWidth={2} />}
      />
    </>
  )
}
