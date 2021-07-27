import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import Button from '../buttons/Button'
import InputErrorsSummary from '../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import {
  Title,
  Description,
  Country,
  Organization,
  HowToApply,
  SourceLink,
  WhoCanApply,
} from './form'
import ApplicationDeadLine from './form/ApplicationDeadLine'
import scholarshipValidation from '../../utils/scholarship-validation'
import createScholarship from '../../actions/scholarship/create-scholarship'
import ImagePicker from '../forms/ImagePicker'
import { InputTitle } from '../forms/form-styles'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import DisplayInputError from '../forms/DisplayInputError'

export default function CreateScholarship() {
  const router = useRouter()
  const [title, setTitle] = useLocalStorage('title', '')
  const [description, setDescription] = useLocalStorage('description', '')
  const [howToApply, setHowToApply] = useLocalStorage('howToApply', [])
  const [country, setCountry] = useLocalStorage('country', '')
  const [organization, setOrganization] = useLocalStorage('organization', '')
  const [image, setImage] = useLocalStorage('image', {
    url: '',
    publicId: '',
  })
  const [whoCanApply, setWhoCanApply] = useLocalStorage('whoCanApply', '')
  const [applicationDeadLine, setApplicationDeadLine] = useLocalStorage('applicationDeadLine', '')
  const [sourceLink, setSourceLink] = useLocalStorage('sourceLink', '')
  const [inputErrors, setInputErrors] = useState({
    title: '',
    description: '',
    country: '',
    organization: '',
    image: '',
    sourceLink: '',
    whoCanApply: '',
  })
  const values = {
    title,
    description,
    country,
    image,
    organization,
    whoCanApply,
    howToApply,
    applicationDeadLine,
    sourceLink,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(createScholarship)
  useEffect(() => {
    if (image.url && image.publicId) {
      setInputErrors({ ...inputErrors, image: '' })
    }
  }, [image.url])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = scholarshipValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    await mutateAsync(values, {
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
    <BorderPaddingWrapper padding>
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
        <SourceLink
          sourceLink={sourceLink}
          setSourceLink={setSourceLink}
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
            <InputTitle> Image</InputTitle>
            <ImagePicker
              image={image}
              setImageCallback={setImage}
              destination="scholarshipImages"
            />
            {inputErrors.image && <DisplayInputError error={inputErrors.image} />}
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
    </BorderPaddingWrapper>
  )
}
