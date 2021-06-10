import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import EditorReader from '../shared/EditorReader'

const Styles = styled.div`
  .post__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #0c4284;
  }
  .post__image {
    width: 100px;
    height: 100px;
    position: relative;
  }
  .post__timestamp {
    font-size: 16px;
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
`

export default function PostDetails({ blog }) {
  return (
    <Styles>
      <h1 className="post__title">{capitalizeFirstLetter(blog.title)}</h1>
      <div className="post__image">
        {blog.image && <Image src={blog.image.url} layout="fill" />}
      </div>
      <p className="post__timestamp">{moment(blog.timestamp).format('MMM Do YY')}</p>
      <EditorReader body={JSON.parse(blog.postBody)} />
      {blog.tags.length ? (
        <div>
          <h3>Tags</h3>
          <section className="post__tags">
            {blog.tags.map((tag) => (
              <span className="post-tags__item">{tag}</span>
            ))}
          </section>
        </div>
      ) : null}
    </Styles>
  )
}
