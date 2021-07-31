import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import useLocalStorage from '../../hooks/useLocalStorage'
import Button from '../buttons/Button'
import InputErrorsSummary from '../forms/InputErrorsSummary'
import { toast } from 'react-toastify'
import editBooking from '../../actions/bookings/edit-booking'
import ImagePicker from '../forms/ImagePicker'
import InputSelect from '../forms/InputSelect'
import CustomInputContainer from '../forms/CustomInputContainer'
import InputField from '../forms/InputField'
import bookingValidation from '../../validations/booking-validation'

export default function EditBooking({ booking }) {
  const router = useRouter()
  const [bookingImage, setBookingImage] = useLocalStorage('bookingImage', { url: '', publicId: '' })
  const [bookingValues, setBookingValues] = useLocalStorage('bookingValues', {
    bookingTitle: '',
    bookingType: '',
    bookingDescription: '',
    bookingAffiliateLink: '',
  })
  const [inputErrors, setInputErrors] = useLocalStorage('inputErrors', {
    bookingTitle: '',
    bookingDescription: '',
    bookingImage: '',
    bookingType: '',
  })
  const { bookingTitle, bookingDescription, bookingType, bookingAffiliateLink } = bookingValues
  const { mutateAsync, isSuccess, isLoading } = useMutation(editBooking)

  useEffect(() => {
    setBookingImage(booking?.image ? booking.image : { url: '', publicId: '' })
    setBookingValues({
      bookingTitle: booking.title,
      bookingType: booking.type,
      bookingDescription: booking.description,
      bookingAffiliateLink: booking?.affiliateLink ? booking.affiliateLink : '',
    })
  }, [])

  const handleChange = (e) => {
    setInputErrors({ ...inputErrors, [e.target.name]: '' })
    setBookingValues({ ...bookingValues, [e.target.name]: e.target.value })
  }

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
    const formItems = {
      title: bookingTitle,
      description: bookingDescription,
      affiliateLink: bookingAffiliateLink,
      type: bookingType,
      image: bookingImage,
    }
    await mutateAsync(
      { bookingId: booking._id, formData: formItems },
      {
        onError: (resError: object) => {
          setInputErrors({ ...inputErrors, ...resError })
        },
        onSuccess: (bookingId) => {
          const localStorageItems: Array<string> = [
            'bookingValues',
            'bookingImage',
            'bookingInputErrors',
          ]
          localStorageItems.forEach((formItem) => localStorage.removeItem(formItem))
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
          <InputField
            title="Booking Title"
            label="bookingTitle"
            name="bookingTitle"
            placeholder="Booking Title"
            onChange={(e) => handleChange(e)}
            error={inputErrors.bookingTitle}
            value={bookingTitle}
          />
        </Grid>
      </Grid>
      <InputField
        title="Booking Description"
        label="bookingDescription"
        name="bookingDescription"
        value={bookingDescription}
        placeholder="Booking Title"
        onChange={(e) => handleChange(e)}
        error={inputErrors.bookingDescription}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <InputField
            title="Booking Affiliate Link"
            label="bookingAffiliateLink"
            name="bookingAffiliateLink"
            value={bookingAffiliateLink}
            placeholder="Booking Title"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <InputSelect
            title="Booking Type"
            label="bookingType"
            name="bookingType"
            value={bookingType}
            options={['hotel', 'flight', 'train']}
            error={inputErrors.bookingType}
            onChange={(e) => handleChange(e)}
            placeholder="Select Booking"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CustomInputContainer title="Booking Image">
            <ImagePicker
              image={bookingImage}
              setImageCallback={setBookingImage}
              destination="bookingImage"
              error={inputErrors.bookingImage}
            />
          </CustomInputContainer>
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
        title="Update Booking"
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
