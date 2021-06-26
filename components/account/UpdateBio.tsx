// import React, { useEffect, useState } from 'react'
// import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
// import styled from 'styled-components'
// import { useMutation } from 'react-query'
// import { useRouter } from 'next/router'
// import { OutlinedButton } from '../../styles/button'
// import { Error, FormControl, GroupLabel, TextArea } from '../../styles/post-form-styles'
// import useAuth from '../../contexts/auth'
// import updateBio from '../../actions/account/update-bio'

// const Styles = styled.div`
//   margin-top: 30px;
//   form {
//     display: flex;
//     flex-wrap: nowrap;
//     flex-direction: column;
//     margin-top: 10px;
//   }
//   textarea {
//     font-family: inherit;
//     outline: none;
//     border: none;
//     resize: none;
//     padding: 10px;
//     background: #f8f8f8;
//     border-radius: 4px;
//     border: 1px solid #cacaca;
//     :placeholder {
//       color: #c4c4c4;
//     }
//   }
//   .button {
//     margin: 15px 0;
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
//   .comment-title {
//     font-size: 16px;
//     font-weight: 500;
//   }
// `

// export default function UpdateBio({ bioToUpdate }) {
//   const router = useRouter()
//   const { isAuthenticated, profile, fetchProfile } = useAuth()

//   const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(updateBio)
//   const [bio, setBio] = useState(bioToUpdate)
//   const [bioError, setBioError] = useState<string>('')
//   const [showData, setShowData] = useState<boolean>(false)

//   useEffect(() => {
//     if (isSuccess) {
//       setShowData(true)
//       setTimeout(() => {
//         setShowData(false)
//       }, 10000)
//     }
//   }, [isSuccess])

//   const handleUpdateBio = async (e) => {
//     e.preventDefault()
//     if (!bio) {
//       setBioError('You cannot update empty bio')
//       return null
//     }
//     if (!isAuthenticated && !profile) {
//       router.push('/account/login')
//     }
//     await mutateAsync(bio, {
//       onSuccess: (res) => {
//         setBio(res)
//         fetchProfile()
//       },
//       onError: (err) => setBioError(err.toString()),
//     })
//     return null
//   }

//   const handleChange = (e) => {
//     setBio(e.target.value)
//   }
//   const handleCancelSuccess = () => {
//     setShowData(false)
//   }
//   return (
//     <Styles>
//       <FormControl>
//         <GroupLabel>Update Bio</GroupLabel>
//         <TextArea placeholder="Write Comment here . . ." value={bio} onChange={handleChange} />
//         {bioError && (
//           <Error>
//             <BiErrorCircle className="icon" />
//             {bioError}
//           </Error>
//         )}
//         {isError && (
//           <Error>
//             <BiErrorCircle className="icon" />
//             {error}
//           </Error>
//         )}
//         {showData && (
//           <div className="success">
//             <p className="success__data">
//               <BiCheckCircle className="success__icon" />
//               <span>Bio Successfully updated</span>
//             </p>
//             <span
//               role="button"
//               onKeyPress={handleCancelSuccess}
//               className="success__cancel"
//               onClick={handleCancelSuccess}
//               tabIndex={0}
//             >
//               X
//             </span>
//           </div>
//         )}
//         <div className="button">
//           {isLoading ? (
//             <OutlinedButton>Updating Bio</OutlinedButton>
//           ) : (
//             <OutlinedButton onClick={handleUpdateBio}>Update Bio</OutlinedButton>
//           )}
//         </div>
//       </FormControl>
//     </Styles>
//   )
// }

import React from 'react'

export default function UpdateBio() {
  return <div></div>
}
