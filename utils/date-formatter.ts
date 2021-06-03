import moment from 'moment'

export default function dateFormatter(date) {
  return date && moment(date).format('MMM Do YYYY')
}
