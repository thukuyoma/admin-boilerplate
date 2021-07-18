import {
  ScholarshipSchemaI,
  ScholarshipValidationFieldI,
} from '../interfaces/scholarship-interface'

const errorMessages = {
  titleIsRequired: 'Title is required',
  organizationIsRequired: 'Organization is required',
  eligibleApplicantIsRequired: 'Who can apply for this scholarship is required',
  descriptionIsRequired: 'Scholarship description is required',
  countryIsRequired: ' Scholarship country is required',
  imageIsRequired: 'Scholarship image is required',
  scholarshipSourceLinkIsRequired: 'Scholarship source link is required',
  scholarshipIdRequired: 'Scholarship Id is required',
  notFound: 'Scholarship does not exist',
  isExist: 'Scholarship already exist',
  isDeleted: 'Scholarship has been deleted',
  isInvalidScholarshipId: 'Invalid scholarship id',
}
export default function scholarshipValidation(formInputs: ScholarshipSchemaI) {
  const { title, organization, whoCanApply, description, country, sourceLink, image } = formInputs
  const errors = {} as ScholarshipValidationFieldI
  if (!title) {
    errors.title = errorMessages.titleIsRequired
  }
  if (!organization) {
    errors.organization = errorMessages.organizationIsRequired
  }
  if (!whoCanApply) {
    errors.whoCanApply = errorMessages.eligibleApplicantIsRequired
  }
  if (!description) {
    errors.description = errorMessages.descriptionIsRequired
  }
  if (!sourceLink) {
    errors.sourceLink = errorMessages.scholarshipSourceLinkIsRequired
  }
  if (!country) {
    errors.country = errorMessages.countryIsRequired
  }
  if (!image.url) {
    errors.image = errorMessages.imageIsRequired
  }
  return {
    isError: Object.keys(errors).length ? true : false,
    errors,
  }
}
