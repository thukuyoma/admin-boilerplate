import { IconNews } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import blogsCount from '../../../actions/post/analytics/blogs-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalBlogs() {
  const { isLoading, data, isSuccess } = useQuery('total blogs', blogsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Blogs"
      icon={<IconNews width={20} color="#FFC300" strokeWidth={1.5} />}
      style={{ borderRight: '1px solid #eeeeee' }}
    />
  )
}
