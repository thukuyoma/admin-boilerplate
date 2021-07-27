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
import updateScholarship from '../../actions/scholarship/update-scholarship'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import DisplayInputError from '../forms/DisplayInputError'
import { InputTitle } from '../forms/form-styles'
import ImagePicker from '../forms/ImagePicker'

export default function UpdateScholarship({ scholarship }) {
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
  const { mutateAsync, isSuccess, isLoading, isError, error, data } = useMutation(updateScholarship)

  useEffect(() => {
    setTitle(scholarship.title)
    setDescription(scholarship.description)
    setHowToApply(scholarship.howToApply)
    setCountry(scholarship.country)
    setOrganization(scholarship.organization)
    setWhoCanApply(scholarship.whoCanApply)
    setApplicationDeadLine(scholarship.applicationDeadLine)
    setSourceLink(scholarship.sourceLink)
    setImage(scholarship.image)
  }, [scholarship])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = scholarshipValidation(values)
    if (validation.isError) {
      setInputErrors(validation.errors)
      return null
    }
    await mutateAsync(
      { scholarshipId: scholarship._id, formData: values },
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
              destination="scholarshipImages"
              image={image}
              setImageCallback={setImage}
            />
            {inputErrors.image && <DisplayInputError error={inputErrors.image} />}
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
          title="Update Scholarship"
          onClick={handleSubmit}
          loading={isLoading}
          disabled={isLoading || isSuccess}
          align="center"
          color="primary"
          size="medium"
          variant="filled"
        />
      </form>
    </BorderPaddingWrapper>
  )
}
