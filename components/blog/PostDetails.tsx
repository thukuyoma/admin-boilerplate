import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import EditorReader from '../shared/EditorReader'

const Styles = styled.div`
  .post__title {
    font-size: 16px;
    line-height: 27px;
    color: #0c4284;
    margin: 0;
    font-weight: 600;
  }
  .post__image {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
    border-radius: 12px;
  }
  .post__timestamp {
    font-size: 13px;
    line-height: 200.4%;
    color: #c4c4c4;
  }
  .post__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > * {
      &:first-child {
        margin-left: 0px;
      }
    }
    > * {
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  .post-tags__item {
    place-item: center;
    display: flex;
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 40px;
    background: #fdf5ed;
  }
  .post__wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  .post__section {
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    .post__image {
      width: 100%;
      height: 200px;
    }
    .post__wrapper {
      display: flex;
      flex-direction: column;
    }
    .post__section {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
  .post-image__caption,
  .post-image__source {
    font-size: 13px;
    color: #0c4284;
  }
`

const TagTItle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  color: #0c4284;
`
const TagItem = styled.div`
  background: #fdf5ed;
  border-radius: 50px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  margin: 10px 10px 5px 0;
  font-size: 12px;
  white-space: nowrap;
`

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export default function PostDetails({ blog }) {
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="post__wrapper">
          {blog.image.url ? (
            <img className="post__image" src={blog.image.url} />
          ) : (
            <img className="post__image" src="/assets/no-blog-image.png" />
          )}
          <div className="post__section">
            <h1 className="post__title">{capitalizeFirstLetter(blog.title)}</h1>
            <span className="post__timestamp">{dateFormatter(blog.timestamp)}</span>
          </div>
        </div>
        {blog?.image?.caption && (
          <p className="post-image__source">
            <strong>Image Caption: </strong>
            {blog.image.caption}
          </p>
        )}
        {blog?.image?.source && (
          <p className="post-image__source">
            <strong>Image Source: </strong>
            {blog.image.source}
          </p>
        )}
        <EditorReader body={JSON.parse(blog.postBody)} />
        {blog.tags.length ? (
          <>
            <TagTItle>Tags</TagTItle>
            <TagsWrapper>
              {blog.tags.map((tag) => (
                <TagItem key={tag}>{tag}</TagItem>
              ))}
            </TagsWrapper>
          </>
        ) : null}
      </BorderPaddingWrapper>
    </Styles>
  )
}
