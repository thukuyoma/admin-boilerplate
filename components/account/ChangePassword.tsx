// import React, { useEffect, useState } from 'react'
// import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
// import styled from 'styled-components'
// import { useMutation } from 'react-query'
// import { useRouter } from 'next/router'
// import { OutlinedButton } from '../../styles/button'
// import { Error, FormControl, GroupLabel, InputField } from '../../styles/post-form-styles'
// import useAuth from '../../contexts/auth'
// import changePassword from '../../actions/account/change-password'

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
//     margin-top: 10px;
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

// export default function ChangePassword() {
//   const router = useRouter()
//   const { isAuthenticated, profile } = useAuth()
//   const [passwords, setPasswords] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmNewPassword: '',
//   })

//   const { mutateAsync, isSuccess, isLoading, isError, error } = useMutation(changePassword)

//   const [inputsError, setInputErrors] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmNewPassword: '',
//   })
//   const [showData, setShowData] = useState<boolean>(false)

//   useEffect(() => {
//     if (isSuccess) {
//       setPasswords({ oldPassword: '', newPassword: '', confirmNewPassword: '' })
//       setShowData(true)
//       setTimeout(() => {
//         setShowData(false)
//       }, 10000)
//     }
//   }, [isSuccess])

//   const { oldPassword, newPassword, confirmNewPassword } = passwords

//   const handleUpdateBio = async (e) => {
//     e.preventDefault()
//     if (!oldPassword) {
//       setInputErrors((prev) => ({ ...prev, oldPassword: 'Old password is required' }))
//     }
//     if (!newPassword) {
//       setInputErrors((prev) => ({ ...prev, newPassword: 'New password is required' }))
//     }
//     if (!confirmNewPassword) {
//       setInputErrors((prev) => ({
//         ...prev,
//         confirmNewPassword: 'Confirm new password is required',
//       }))
//     }
//     if (newPassword !== confirmNewPassword) {
//       setInputErrors((prev) => ({
//         ...prev,
//         newPassword: 'New password and confirm password must match',
//         confirmNewPassword: 'New password and confirm password must match',
//       }))
//     }

//     if (!oldPassword || !newPassword || !confirmNewPassword || newPassword !== confirmNewPassword) {
//       return null
//     }

//     if (!isAuthenticated && !profile) {
//       router.push('/account/login')
//     }

//     const passwordToUpdate = {
//       oldPassword,
//       newPassword,
//     }

//     await mutateAsync(passwordToUpdate)
//     return null
//   }

//   const handleChange = (e) => {
//     setInputErrors((prev) => ({
//       ...prev,
//       [e.target.name]: '',
//     }))
//     setPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }
//   const handleCancelSuccess = () => {
//     setShowData(false)
//   }
//   return (
//     <Styles>
//       <FormControl>
//         <GroupLabel>Update Password</GroupLabel>
//         <InputField
//           type="password"
//           placeholder="Old Password"
//           value={oldPassword}
//           name="oldPassword"
//           onChange={handleChange}
//         />
//         {inputsError.oldPassword && (
//           <Error>
//             <BiErrorCircle className="icon" />
//             {inputsError.oldPassword}
//           </Error>
//         )}
//         <InputField
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           name="newPassword"
//           onChange={handleChange}
//         />
//         {inputsError.newPassword && (
//           <Error>
//             <BiErrorCircle className="icon" />
//             {inputsError.newPassword}
//           </Error>
//         )}
//         <InputField
//           type="password"
//           placeholder="Confirm New Password"
//           value={confirmNewPassword}
//           name="confirmNewPassword"
//           onChange={handleChange}
//         />
//         {inputsError.confirmNewPassword && (
//           <Error>
//             <BiErrorCircle className="icon" />
//             {inputsError.confirmNewPassword}
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
//               <span>Password Successfully Changed</span>
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
//             <OutlinedButton>Changing Password</OutlinedButton>
//           ) : (
//             <OutlinedButton onClick={handleUpdateBio}>Change Password</OutlinedButton>
//           )}
//         </div>
//       </FormControl>
//     </Styles>
//   )
// }

import React from 'react'

export default function ChangePassword() {
  return <div></div>
}
