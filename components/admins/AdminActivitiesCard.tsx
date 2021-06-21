import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import wordsCapitalizer from '../../utils/words-capitalizer'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'

const Styles = styled.div`
  margin-bottom: 50px;
`

export default function AdminActivitiesCard({ activity }) {
  return (
    <Styles>
      <TagKeyValuePair>
        <TagKey>Type</TagKey>
        <TagValue>{activity.type}</TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Created By:</TagKey>
        <TagValue>{wordsCapitalizer(activity.createdByFullName)}</TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Created On:</TagKey>
        <TagValue>{moment(activity.timestamp).format('MMM Do YY')}</TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Action:</TagKey>
        <TagValue>{activity.activity}</TagValue>
      </TagKeyValuePair>
    </Styles>
  )
}
