import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import getFormData from '../../utils/get-form-data'
import Button from '../shared/Button'
import InputErrorsSummary from '../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import {
  Title,
  Description,
  Country,
  Organization,
  HowToApply,
  ScholarshipSourceLink,
  WhoCanApply,
} from './form'
import ApplicationDeadLine from './form/ApplicationDeadLine'
import ScholarshipImage from './form/ScholarshipImage'
import scholarshipValidation from '../../utils/scholarship-validation'
import createScholarship from '../../actions/scholarship/create-scholarship'

export default function CreateScholarship() {
  const router = useRouter()
  const [title, setTitle] = useLocalStorage('title', '')
  const [description, setDescription] = useLocalStorage('description', '')
  const [howToApply, setHowToApply] = useLocalStorage('howToApply', [])
  const [country, setCountry] = useLocalStorage('country', '')
  const [organization, setOrganization] = useLocalStorage('organization', '')
  const [scholarshipImage, setScholarshipImage] = useState<File | Blob | string>('')
  const [whoCanApply, setWhoCanApply] = useLocalStorage('whoCanApply', '')
  const [applicationDeadLine, setApplicationDeadLine] = useLocalStorage('applicationDeadLine', '')
  const [scholarshipSourceLink, setScholarshipSourceLink] = useLocalStorage(
    'scholarshipSourceLink',
    ''
  )
  const [inputErrors, setInputErrors] = useState({
    title: '',
    description: '',
    country: '',
    organization: '',
    scholarshipImage: '',
    scholarshipSourceLink: '',
    whoCanApply: '',
  })
  const values = {
    title,
    description,
    country,
    scholarshipImage,
    organization,
    whoCanApply,
    howToApply,
    applicationDeadLine,
    scholarshipSourceLink,
  }
  const { mutateAsync, isSuccess, isLoading, error, data } = useMutation(createScholarship)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = scholarshipValidation(values)
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    const scholarshipForm = getFormData({ ...values, howToApply: JSON.stringify(howToApply) })
    await mutateAsync(scholarshipForm, {
      onError: (resError: object) => {
        setInputErrors({ ...inputErrors, ...resError })
      },
      onSuccess: (scholarshipId) => {
        Object.keys(values).forEach((formItem) => localStorage.removeItem(formItem))
        toast.success('Scholarship successfully created')
        router.push(`/scholarships/${scholarshipId}`)
      },
    })
    return null
  }

  return (
    <form encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Title
            title={title}
            setTitle={setTitle}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Description
        description={description}
        setDescription={setDescription}
        inputErrors={inputErrors}
        setInputErrors={setInputErrors}
      />
      <ScholarshipSourceLink
        scholarshipSourceLink={scholarshipSourceLink}
        setScholarshipSourceLink={setScholarshipSourceLink}
        inputErrors={inputErrors}
        setInputErrors={setInputErrors}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Country
            country={country}
            setCountry={setCountry}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Organization
            organization={organization}
            setOrganization={setOrganization}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <WhoCanApply
            whoCanApply={whoCanApply}
            setWhoCanApply={setWhoCanApply}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ApplicationDeadLine
            setApplicationDeadLine={setApplicationDeadLine}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ScholarshipImage
            imageUrl=""
            setScholarshipImage={setScholarshipImage}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <HowToApply howToApply={howToApply.slice().reverse()} setHowToApply={setHowToApply} />
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
        title={isLoading ? 'Creating Scholarship' : 'Create Scholarship'}
        onClick={handleSubmit}
        loading={isLoading}
        align="center"
        disabled={isLoading || isSuccess}
        color="primary"
        size="medium"
        variant="filled"
      />
    </form>
  )
}
