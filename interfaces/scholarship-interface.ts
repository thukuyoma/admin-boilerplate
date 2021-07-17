export interface ScholarshipSchemaI {
  title: string
  organization: string
  whoCanApply: string
  scholarshipSourceLink: string
  country: string
  description: string
  howToApply?: Array<string>
  scholarshipImage?: { url: string; publicId: string }
  applicationDeadLine?: string | number
}

export type ScholarshipValidationFieldI = {
  title: string
  description: string
  country: string
  organization: string
  scholarshipImage: string
  scholarshipSourceLink: string
  whoCanApply: string
}
