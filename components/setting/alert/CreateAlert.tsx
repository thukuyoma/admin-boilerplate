import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import createAlert from '../../../actions/settings/alert/create-alert'
import alertValidation from '../../../utils/alert-validation'
import InputErrorsSummary from '../../forms/InputErrorsSummary'
import Button from '../../buttons/Button'
import { AlertButtonText, ExpiresAt, Message, AlertButtonLink, AlertType } from './form'

export default function CreateAlert() {
  const router = useRouter()
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')
  const [expiresAt, setExpiresAt] = useState('')
  const [alertButtonText, setAlertButtonText] = useState('')
  const [alertButtonLink, setAlertButtonLink] = useState('')
  const [inputErrors, setInputErrors] = useState({
    type: '',
    message: '',
    expiresAt: '',
    alertButtonText: '',
    alertButtonLink: '',
  })
  const values = {
    type,
    message,
    expiresAt,
    alertButtonText,
    alertButtonLink,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(createAlert)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = alertValidation(values)
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    await mutateAsync(values, {
      onError: (resError: object) => {
        setInputErrors({ ...inputErrors, ...resError })
      },
      onSuccess: () => {
        toast.success('Alert successfully created')
        router.push(`/settings/alerts`)
      },
    })
    return null
  }

  return (
    <form encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <AlertType
            type={type}
            setType={setType}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ExpiresAt
            setExpiresAt={setExpiresAt}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Message
            message={message}
            setMessage={setMessage}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <AlertButtonText
            alertButtonText={alertButtonText}
            setAlertButtonText={setAlertButtonText}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <AlertButtonLink
            alertButtonLink={alertButtonLink}
            setAlertButtonLink={setAlertButtonLink}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <>
        {Object.values(inputErrors).filter((error) => error.length > 3).length ? (
          <InputErrorsSummary
            errors={Object.values(inputErrors).filter((error) => error.length > 3)}
          />
        ) : null}
      </>
      <Button
        block
        title="Create Alert"
        onClick={handleSubmit}
        loading={isLoading}
        align="center"
        style={{ border: '1px solid #06c', marginTop: '50px' }}
        disabled={isLoading || isSuccess}
        color="primary"
        size="medium"
        variant="filled"
      />
    </form>
  )
}
