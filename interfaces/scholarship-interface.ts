export interface ScholarshipSchemaI {
  title: string
  organization: string
  whoCanApply: string
  sourceLink: string
  country: string
  description: string
  howToApply?: Array<string>
  image?: { url: string; publicId: string }
  applicationDeadLine?: string | number
}

export type ScholarshipValidationFieldI = {
  title: string
  description: string
  country: string
  organization: string
  image: string
  sourceLink: string
  whoCanApply: string
}
