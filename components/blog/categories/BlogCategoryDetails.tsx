import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import dateFormatter from '../../../utils/date-formatter'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'
import { TagKey, TagKeyValuePair, TagValue } from '../../shared/shared-styles'

const Styles = styled.div`
  .category__title {
    font-size: 16px;
    line-height: 27px;
    color: #0c4284;
    margin: 0;
    font-weight: 600;
  }
  .category__image {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
    border-radius: 12px;
  }
  .category__timestamp {
    font-size: 13px;
    line-height: 200.4%;
    color: #c4c4c4;
  }
  .category__wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  .category__section {
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    .category__image {
      width: 100%;
      height: 200px;
    }
    .category__wrapper {
      display: flex;
      flex-direction: column;
    }
    .category__section {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`

export default function BlogCategoryDetails({ category }) {
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="category__wrapper">
          {category.image.url ? (
            <img className="category__image" src={category?.image?.url} />
          ) : (
            <img className="category__image" src="/assets/no-blog-image.png" />
          )}
          <div className="category__section">
            <h1 className="category__title">{capitalizeFirstLetter(category.title)}</h1>
            <span className="category__timestamp">{dateFormatter(category.timestamp)}</span>
            <TagKeyValuePair>
              <TagKey>Created by:</TagKey>
              <TagValue>{category.createdBy.adminFullName}</TagValue>
            </TagKeyValuePair>
          </div>
        </div>
        <p>{capitalizeFirstLetter(category.description)}</p>
      </BorderPaddingWrapper>
    </Styles>
  )
}
