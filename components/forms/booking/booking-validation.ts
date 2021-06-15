/**
 * @description booking validation
 * @param title
 * @param description
 * @param type
 * @param path
 */
export default function bookingValidation({
  bookingTitle,
  bookingDescription,
  bookingType,
  bookingImage,
}: {
  bookingTitle: string
  bookingDescription: string
  bookingType: string
  bookingImage: File | Blob | string
}) {
  const errors = {} as {
    bookingTitle: string
    bookingDescription: string
    bookingType: string
    bookingImage: string
  }
  if (!bookingTitle) {
    errors.bookingTitle = 'Booking title is required'
  }
  if (!bookingDescription) {
    errors.bookingDescription = 'Booking  description is required'
  }
  if (bookingDescription && bookingDescription.length > 150) {
    errors.bookingDescription = 'booking description should not be more than 150 characters'
  }
  if (!bookingType) {
    errors.bookingType = 'Booking type is required'
  }
  if (!bookingImage) {
    errors.bookingImage = 'Booking image is required'
  }
  return { errors, isError: Object.keys(errors).length > 0 }
}
