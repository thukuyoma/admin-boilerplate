import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import ErrorAlert from '../../../components/shared/ErrorAlert'
import { useAnalytics } from '../../../context/analytics'
import accountVerification from '../../../actions/account/account-verification'
import { BsCheckCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 10px;

  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .success__icon {
    font-size: 100px;
    color: #4cd964;
  }
  .success__message {
    font-size: 12px;
    color: #4cd964;
  }
`

export default function AccountVerificationPage() {
  const { ip, device } = useAnalytics()
  const { mutateAsync, isLoading, isError, error, isSuccess, data } = useMutation(
    accountVerification
  )
  const router = useRouter()
  const { accountVerificationToken } = router.query
  const handleSubmit = async () => {
    await mutateAsync(
      { token: accountVerificationToken, ip, device },
      {
        onSuccess: (data) => {
          toast.success(data)
          router.push('/')
          return null
        },
        onError: (err) => {
          toast.error(err)
          router.push('/')
          return null
        },
      }
    )
  }
  useEffect(() => {
    if (accountVerificationToken && ip && device) {
      handleSubmit()
    }
  }, [accountVerificationToken, ip, device])

  return (
    <Styles>
      {isLoading && <p>Please wait!!! we are verifying your account right now</p>}

      {isSuccess && (
        <div className="success">
          <BsCheckCircle className="success__icon" />
          <p className="success__message">{data}</p>
        </div>
      )}
      {isError && <ErrorAlert error={error} />}
    </Styles>
  )
}
