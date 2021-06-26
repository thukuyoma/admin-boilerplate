// /* eslint-disable no-underscore-dangle */
// /* eslint-disable jsx-a11y/interactive-supports-focus */
// import React from 'react'
// import styled from 'styled-components'
// import Image from 'next/image'
// import { RiDeleteBin5Line } from 'react-icons/ri'
// import { BsPen, BsEye, BsEyeSlash } from 'react-icons/bs'
// import { useMutation } from 'react-query'
// import Loader from 'react-loader-spinner'
// import Link from 'next/link'
// import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
// import dateFormatter from '../../utils/date-formatter'
// import deletePost from '../../actions/post/delete-posts'
// import ErrorAlert from '../shared/ErrorAlert'
// import wordShortener from '../../utils/wordShortener'

// const Styles = styled.div`
//   display: flex;
//   margin-bottom: 20px;

//   .thumbnail {
//     width: 200px;
//     height: 130px;
//     position: relative;
//     margin-bottom: 10px;
//   }
//   .details {
//     min-width: 300px;
//     margin-left: 10px;
//     flex: 3 0 0;
//     left: 0px;
//     .title {
//       font-weight: 600;
//       font-size: 18px;
//       line-height: 126.5%;
//       cursor: pointer;
//     }
//   }

//   .button {
//     display: flex;
//     align-items: center;
//     margin-right: 10px;
//     cursor: pointer;
//   }
//   .icon {
//     color: #263238;
//     margin-right: 5px;
//   }
//   .button-wrapper {
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//   }
//   .delete {
//     color: #ee373c;
//   }
//   .cat-date {
//     display: flex;
//     align-items: center;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 126.5%;
//   }
//   .cat,
//   .date {
//     color: #02b0ef;
//     margin-right: 10px;
//     display: flex;
//     align-items: center;
//     display: flex;
//     align-items: center;
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;
//     .details {
//       margin: 0;
//     }
//     .thumbnail {
//       width: 100%;
//       height: 200px;
//     }
//   }
// `

// const ProfilePostCard = ({ post, setPosts, page }) => {
//   const { mutateAsync, isLoading, isError, error } = useMutation(deletePost)

//   const handleDelete = async () => {
//     await mutateAsync({ postId: post._id, page }, { onSuccess: (res) => setPosts(res) })
//   }
//   return (
//     <Styles>
//       <div className="thumbnail">{post.image && <Image src={post.image.url} layout="fill" />}</div>
//       <div className="details">
//         <div className="cat-date">
//           <span className="cat">{post.category.toUpperCase()} -</span>
//           <span className="date">{dateFormatter(post.timestamp)}</span>
//         </div>
//         <Link href={`/${post.category}/${post.slug}`}>
//           <a>
//             <h1 className="title"> {wordShortener(capitalizeFirstLetter(post.title), 15)}</h1>
//           </a>
//         </Link>
//         {isError && <ErrorAlert error={error} />}
//         <div className="button-wrapper">
//           <Link href={`/edit/${post.slug}`}>
//             <a>
//               <span className="button">
//                 <BsPen className="icon" />
//                 Edit
//               </span>
//             </a>
//           </Link>
//           <span
//             role="button"
//             className="button delete"
//             onKeyPress={handleDelete}
//             onClick={handleDelete}
//           >
//             <RiDeleteBin5Line className="icon" />
//             Delete
//             {isLoading && (
//               <Loader
//                 style={{ paddingLeft: '10px' }}
//                 type="TailSpin"
//                 color="#c00"
//                 height={15}
//                 width={15}
//               />
//             )}
//           </span>
//           <span className="button">
//             {post.status.published ? (
//               <>
//                 <BsEye className="icon" /> published
//               </>
//             ) : (
//               <>
//                 <BsEyeSlash className="icon" /> Unpublished
//               </>
//             )}
//           </span>
//         </div>
//       </div>
//     </Styles>
//   )
// }

// export default ProfilePostCard

import React from 'react'

export default function ProfilePostCard() {
  return <div></div>
}
