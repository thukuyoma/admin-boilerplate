import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import getFormData from '../../utils/get-form-data'
import Button from '../buttons/Button'
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
import updateScholarship from '../../actions/scholarship/update-scholarship'

export default function UpdateScholarship({ scholarship }) {
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
  const { mutateAsync, isSuccess, isLoading, isError, error, data } = useMutation(updateScholarship)

  useEffect(() => {
    setTitle(scholarship.title)
    setDescription(scholarship.description)
    setHowToApply(scholarship.howToApply)
    setCountry(scholarship.country)
    setOrganization(scholarship.organization)
    setWhoCanApply(scholarship.whoCanApply)
    setApplicationDeadLine(scholarship.applicationDeadLine)
    setScholarshipSourceLink(scholarship.scholarshipSourceLink)
  }, [scholarship])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = scholarshipValidation({
      ...values,
      scholarshipImage: scholarship.image.url,
    })
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    const scholarshipForm = getFormData({ ...values, howToApply: JSON.stringify(howToApply) })
    await mutateAsync(
      { scholarshipId: scholarship._id, formData: scholarshipForm },
      {
        onError: (resError: object) => {
          setInputErrors({ ...inputErrors, ...resError })
        },
        onSuccess: (scholarshipId) => {
          Object.keys(values).forEach((formItem) => localStorage.removeItem(formItem))
          toast.success('Scholarship successfully updated')
          router.push(`/scholarships/${scholarshipId}`)
        },
      }
    )
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
            imageUrl={scholarship.image ? scholarship.image.url : ''}
            setScholarshipImage={setScholarshipImage}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <HowToApply howToApply={howToApply} setHowToApply={setHowToApply} />
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
        title={isLoading ? 'Updating Scholarship' : 'Update Scholarship'}
        onClick={handleSubmit}
        loading={isLoading}
        disabled={isLoading || isSuccess}
        align="center"
        color="primary"
        size="medium"
        variant="filled"
      />
    </form>
  )
}
