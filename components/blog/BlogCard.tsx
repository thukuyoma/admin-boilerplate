import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import wordShortener from '../../utils/wordShortener'
import useWindowSize from '../../hooks/useWindowSize'

const Styles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  padding-right: 20px;
  .blog__image {
    height: 62px;
    width: 62px;
    border-radius: 0px;
    margin-right: 10px;
  }
  .blog-details {
    width: 100%;
  }
  .blog-details__title {
    font-weight: normal;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
  .blog-details__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: gray;
  }
  .blog__Count {
    display: flex;
    place-items: center;
    > * {
      &:first-child {
        margin-right: 5px;
      }
    }
  }
  .blog__read {
    color: #0098db;
    padding: 5px 10px;
    border: 1px solid #e8e8e8;
    border-radius: 23px;
    cursor: pointer;
    :hover {
      color: #fff;
      background: #0098db;
    }
  }
  .blog-counter__wrapper {
    display: flex;
    align-items: center;
    > * {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
`
export default function BlogCard({ blog }) {
  const { width } = useWindowSize()
  const router = useRouter()
  return (
    <Styles>
      <img
        src={blog.image ? blog.image.url : '/assets/no-blog-image.png'}
        className="blog__image"
      />
      <div className="blog-details">
        <h1 className="blog-details__title">
          {width < 600 ? wordShortener(blog.title, 20) : blog.title}
        </h1>
        <div className="blog-details__wrapper">
          <div className="blog-counter__wrapper">
            <div className="blog__Count">
              <CgCalendarDates />
              {dateFormatter(blog.timestamp)}
            </div>
            <div className="blog__Count">
              <AiOutlineEye />
              10000
            </div>
          </div>
          <span className="blog__read" onClick={() => router.push(`/blogs/${blog.slug}`)}>
            View
          </span>
        </div>
      </div>
    </Styles>
  )
}
