// /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
// /* eslint-disable jsx-a11y/interactive-supports-focus */
// import React, { useEffect, useRef, useState } from 'react'
// import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi'
// import { useMutation } from 'react-query'
// import styled from 'styled-components'
// import { FiCamera } from 'react-icons/fi'
// import { OutlinedButton } from '../../styles/button'
// import Progress from './Progress'
// import { Error } from '../../styles/post-form-styles'
// import uploadAvatar from '../../actions/account/upload-avatar'
// import useAuth from '../../contexts/auth'

// const Styles = styled.div`
//   .avatar {
//     width: 150px;
//     height: 150px;
//     border-radius: 80px;
//     background: gray;
//     margin-bottom: 15px;
//     position: relative;
//     flex: 1 0 150px;

//     .image {
//       border-radius: 80px;
//     }
//   }
//   .user-details {
//     min-width: 320px;
//     display: flex;
//     flex-direction: column;
//     margin-left: 10px;
//   }

//   // lets make a try
//   .image__holder {
//     position: relative;
//   }
//   .image__icon {
//     position: absolute;
//     top: 161px;
//     right: 42px;
//     color: #fdbf00;
//     cursor: pointer;
//     font-size: 14px;
//     border-radius: 20px;
//     width: 30px;
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #cc00001a;
//     opacity: 1;
//     margin: 5px;
//     :hover {
//       background: black;
//       color: white;
//     }
//   }
//   .preview__image {
//     width: 200px;
//     height: 200px;
//     border-radius: 100px;
//     margin-right: 20px;
//   }

//   .message {
//     font-size: 12px;
//     color: #ffc107;
//     margin: 0;
//     height: 20px;
//   }
//   .default__avatar {
//     width: 200px;
//     height: 200px;
//     margin-right: 20px;
//     border-radius: 100px;
//   }
//   .avatar-group {
//     display: flex;
//     align-items: center;

//     @media (max-width: 500px) {
//       flex-direction: column;
//       justify-content: center;
//       p {
//         text-align: center;
//       }
//     }
//   }
//   .success {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     border: 1px solid #4caf50;
//     border-radius: 4px;
//     padding: 10px;
//     background: #4caf50;
//     color: white;
//     .success__data {
//       display: flex;
//       align-items: center;
//       flex-wrap: nowrap;
//       margin: 0;
//       margin-right: 10px;
//     }
//     .success__icon {
//       margin-right: 5px;
//       font-size: 20px;
//     }
//     .success__cancel {
//       cursor: pointer;
//       font-size: 15px;
//     }
//   }
// `

// export default function UpdateAvatar({ profile }) {
//   const [image, setImage] = useState({ preview: '', raw: '' })
//   const [uploadPercentage, setUploadPercentage] = useState(0)
//   const { fetchProfile } = useAuth()

//   const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(uploadAvatar)

//   const handleImage = (e) => {
//     if (e.target.files.length) {
//       setImage({
//         preview: URL.createObjectURL(e.target.files[0]),
//         raw: e.target.files[0],
//       })
//     }
//   }

//   const [showData, setShowData] = useState<boolean>(false)
//   useEffect(() => {
//     if (isSuccess) {
//       setShowData(true)
//       setTimeout(() => {
//         setShowData(false)
//       }, 10000)
//     }
//   }, [isSuccess])

//   const imageInputRef = useRef<HTMLInputElement>(null)

//   const handleUpload = async () => {
//     const formData = new FormData()
//     formData.append('avatar', image.raw)
//     await mutateAsync(
//       { formData, setUploadPercentage },
//       {
//         onSuccess: () => {
//           fetchProfile()
//         },
//       }
//     )
//   }

//   const handleCancelSuccess = () => {
//     setShowData(false)
//   }
//   return (
//     <Styles>
//       <div className="avatar-group">
//         <div>
//           {image.preview ? (
//             <>
//               <div className="image__holder">
//                 <img src={`${image.preview}`} alt="setup illustration" className="preview__image" />
//                 <div
//                   role="button"
//                   className="image__icon"
//                   onKeyPress={() => imageInputRef.current.click()}
//                   onClick={() => imageInputRef.current.click()}
//                 >
//                   <FiCamera style={{ color: '#e91e63', fontSize: '16px' }} />
//                 </div>
//               </div>
//               {uploadPercentage !== 0 && <Progress percentage={uploadPercentage} />}
//             </>
//           ) : (
//             <>
//               <img
//                 src={profile.avatar ? profile.avatar : '/assets/images/default__avatar__photo.jpg'}
//                 alt="avatar"
//                 className="default__avatar"
//               />
//             </>
//           )}
//         </div>
//         <div>
//           <form encType="multipart/form-data">
//             <input
//               type="file"
//               onChange={handleImage}
//               ref={imageInputRef}
//               style={{ display: 'none' }}
//             />
//           </form>
//           <p>
//             {isError && (
//               <Error>
//                 <BiErrorCircle className="icon" />
//                 {error}
//               </Error>
//             )}
//           </p>
//           <p>
//             {showData && (
//               <div className="success">
//                 <p className="success__data">
//                   <BiCheckCircle className="success__icon" />
//                   <span>Profile Image Uploaded successfully</span>
//                 </p>
//                 <span
//                   role="button"
//                   onKeyPress={handleCancelSuccess}
//                   className="success__cancel"
//                   onClick={handleCancelSuccess}
//                   tabIndex={0}
//                 >
//                   X
//                 </span>
//               </div>
//             )}
//           </p>
//           {image.preview ? (
//             <div className="button">
//               {isLoading ? (
//                 <OutlinedButton>Uploading Image</OutlinedButton>
//               ) : (
//                 <OutlinedButton onClick={handleUpload}>Upload Image</OutlinedButton>
//               )}
//             </div>
//           ) : (
//             <OutlinedButton onClick={() => imageInputRef.current.click()}>
//               Chose Image
//             </OutlinedButton>
//           )}
//         </div>
//       </div>
//     </Styles>
//   )
// }

import React from 'react'

export default function UpdateAvatar() {
  return <div></div>
}
