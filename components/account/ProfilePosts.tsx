// import React, { useState } from 'react'
// import { useQuery } from 'react-query'
// import ProfilePostCard from './ProfilePostCard'
// import getAuthorPosts from '../../actions/post/get-author-posts'
// import QueryPagination from '../shared/QueryPagination'

// export default function ProfilePosts() {
//   const [page, setPage] = useState(1)
//   const [query, setQuery] = useState({
//     hasMore: false,
//     totalPages: 0,
//     totalPosts: 0,
//     currentPage: page,
//     posts: null,
//   })
//   const { isError, error, isFetching, isPreviousData } = useQuery(
//     ['authorsPosts', page],
//     () => getAuthorPosts(page),
//     {
//       keepPreviousData: true,
//       onSuccess: (res) => {
//         setQuery(res)
//       },
//     }
//   )
//   const handleNextPage = () => {
//     if (!isPreviousData && query.hasMore) {
//       setPage((prev) => prev + 1)
//     }
//   }
//   const handlePrevPage = () => {
//     setPage((prev) => Math.max(prev - 1, 1))
//   }

//   return (
//     <>
//       <p className="section-header">
//         You have written {query.posts ? `${query.totalPosts} Post(s)` : '0 post'}
//       </p>
//       {isError && <span>{error}</span>}
//       {query.posts &&
//         query.posts.map((post) => (
//           <ProfilePostCard page={page} setPosts={setQuery} post={post} key={post.slug} />
//         ))}
//       <QueryPagination
//         nextPage={handleNextPage}
//         prevPage={handlePrevPage}
//         hasMore={query.hasMore}
//         currentPage={query.currentPage}
//         totalPages={query.totalPages}
//         isFetching={isFetching}
//       />
//     </>
//   )
// }

import React from 'react'

export default function ProfilePosts() {
  return <div></div>
}
