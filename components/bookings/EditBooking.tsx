import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import getFormData from '../../utils/get-form-data'
import Button from '../shared/Button'
import InputErrorsSummary from '../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import {
  BookingTitle,
  BookingDescription,
  BookingImage,
  BookingType,
  BookingAffiliateLink,
} from '../forms/booking'
import bookingValidation from '../forms/booking/booking-validation'
import editBooking from '../../actions/bookings/edit-booking'

export default function EditBooking({ booking }) {
  const router = useRouter()
  const [bookingTitle, setBookingTitle] = useLocalStorage('bookingTitle', '')
  const [bookingImage, setBookingImage] = useState<File | Blob | string>('')
  const [bookingType, setBookingType] = useLocalStorage('bookingType', '')
  const [bookingDescription, setBookingDescription] = useLocalStorage('bookingDescription', '')
  const [bookingAffiliateLink, setBookingAffiliateLink] = useLocalStorage(
    'bookingAffiliateLink',
    ''
  )
  const [inputErrors, setInputErrors] = useLocalStorage('inputErrors', {
    bookingTitle: '',
    bookingDescription: '',
    bookingImage: '',
    bookingType: '',
  })
  const values = {
    title: bookingTitle,
    description: bookingDescription,
    bookingImage: bookingImage,
    type: bookingType,
    affiliateLink: bookingAffiliateLink,
  }
  const { mutateAsync, isSuccess, isLoading } = useMutation(editBooking)

  useEffect(() => {
    setBookingTitle(booking.title)
    setBookingType(booking.type)
    setBookingDescription(booking.description)
    setBookingAffiliateLink(booking?.affiliateLink ? booking.affiliateLink : '')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationResult = bookingValidation({
      bookingTitle,
      bookingDescription,
      bookingImage,
      bookingType,
    })
    if (validationResult.isError) {
      setInputErrors(validationResult.errors)
      return null
    }
    const bookingForm = getFormData(values)
    await mutateAsync(
      { bookingId: booking._id, formData: bookingForm },
      {
        onError: (resError: object) => {
          setInputErrors({ ...inputErrors, ...resError })
        },
        onSuccess: (bookingId) => {
          const localStorageItems: Array<string> = [
            'bookingTitle',
            'bookingDescription',
            'bookingImage',
            'bookingType',
            'bookingAffiliateLink',
          ]
          localStorageItems.forEach((formItem) => localStorage.removeItem(formItem))
          localStorage.removeItem('inputErrors')
          toast.success('Booking successfully updated')
          router.push(`/bookings/${bookingId}`)
        },
      }
    )
    return null
  }

  return (
    <form encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <BookingTitle
            bookingTitle={bookingTitle}
            setBookingTitle={setBookingTitle}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <BookingDescription
        bookingDescription={bookingDescription}
        setBookingDescription={setBookingDescription}
        inputErrors={inputErrors}
        setInputErrors={setInputErrors}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <BookingAffiliateLink
            bookingAffiliateLink={bookingAffiliateLink}
            setBookingAffiliateLink={setBookingAffiliateLink}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <BookingType
            bookingType={bookingType}
            setBookingType={setBookingType}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <BookingImage
            imageUrl={booking?.bookingImage ? booking.bookingImage.url : ''}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
            setBookingImage={setBookingImage}
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
        title={isLoading ? 'Updating booking' : 'Update Booking'}
        onClick={handleSubmit}
        loading={isLoading}
        align="center"
        style={{ border: '1px solid #06c', marginTop: '50px' }}
        disabled={isLoading || isSuccess}
      />
    </form>
  )
}
