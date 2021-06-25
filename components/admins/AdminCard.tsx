import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import randomColorPicker from '../../utils/random-color-picker'
import wordsCapitalizer from '../../utils/words-capitalizer'

const Styles = styled.div`
  margin-bottom: 30px;
  .admin__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .admin__group {
    display: flex;
  }
  .admin__tag {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 50px;
    background: #f0f0f0;
    color: #8b8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .admin__name {
    font-size: 13px;
    color: #a2a1a1;
    display: flex;
    flex-wrap: wrap;
  }
  .applicant__nationality {
    margin-left: 5px;
  }
  .admin__email {
    font-size: 16px;
    margin: 0;
    padding-top: 3px;
  }
  .admin__button {
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px 10px;
    color: #a2a1a1;
    white-space: nowrap;
    font-size: 14px;
  }
  .admin__actions {
    display: flex;
    flex-direction: column;
  }
  .view-more__button {
    display: none;
  }
  .admin__timestamp {
    font-style: italic;
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    .admin__button {
      display: none;
    }
    .view-more__button {
      display: flex;
      color: #0098db;
      margin-bottom: 0;
    }
  }
`

export default function ApplicationCard({ admin }) {
  const colors = randomColorPicker()
  const router = useRouter()
  return (
    <Styles>
      <div className="admin__wrapper">
        <div className="admin__group">
          <div
            className="admin__tag"
            style={{ backgroundColor: colors.primary, color: colors.comp }}
          >
            {admin.firstName.charAt(0).toUpperCase()}
            {admin.lastName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="admin__name">
              {wordsCapitalizer(`${admin.firstName} ${admin.lastName}`)}
              <span className="admin__timestamp">{dateFormatter(admin.timestamp)}</span>
            </div>
            <p className="admin__email">{admin.email}</p>
            <p
              className="view-more__button"
              onClick={() => router.push(`/admins/${admin._id}`)}
              onKeyPress={() => router.push(`/admins/${admin._id}`)}
              tabIndex={0}
            >
              View More
            </p>
          </div>
        </div>
        <div className="admin__actions">
          <span
            onClick={() => router.push(`/admins/${admin._id}`)}
            onKeyPress={() => router.push(`/admins/${admin._id}`)}
            tabIndex={0}
            className="admin__button"
          >
            See More
          </span>
        </div>
      </div>
    </Styles>
  )
}
