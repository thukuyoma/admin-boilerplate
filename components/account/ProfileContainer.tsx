import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiSettings3Line } from 'react-icons/ri'
import styled from 'styled-components'
import useAuth from '../../context/auth'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  .avatar__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #5e5e5e1f;
    padding-bottom: 20px;
  }
  .username {
    font-size: 16px;
    font-weight: 700;
  }

  .email {
    font-size: 13px;
    margin-top: 5px;
  }

  .avatar {
    height: 70px;
    width: 70px;
    border-radius: 59px;
    margin-bottom: 15px;
    background: gray;
  }

  .item__icon {
    margin-right: 5px;
  }
  .profile-card-initials {
    height: 70px;
    width: 70px;
    border-radius: 59px;
    background-color: #385c78;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
  }
  .account__action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .account__action-seperator {
    margin: 0 10px;
  }
  .account__Settings {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #0098db;
    cursor: pointer;
    :hover {
      color: #2a74be;
    }
  }
  .account__logout {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #e4585a;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`

export default function ProfileContainer({ setSwitchCaseAccount }) {
  const { profile, isLoading, logout } = useAuth()

  return (
    <Styles>
      {!isLoading && profile ? (
        <>
          <div className="avatar__name">
            <div className="avatar">
              {profile && !isLoading && (
                <>
                  {profile?.avatar?.url ? (
                    <img src={profile.avatar?.url} alt="logo" className="avatar" />
                  ) : (
                    <div className="profile-card-initials">
                      {capitalizeFirstLetter(profile.firstName)?.charAt(0)}
                      {capitalizeFirstLetter(profile.lastName)?.charAt(0)}
                    </div>
                  )}
                </>
              )}
            </div>
            <span className="username">
              {capitalizeFirstLetter(profile.firstName)} {capitalizeFirstLetter(profile.lastName)}
            </span>
            <p className="email">{profile.email}</p>
            <div className="account__action">
              <span className="account__Settings" onClick={() => setSwitchCaseAccount('settings')}>
                <RiSettings3Line className="item__icon" />
                <span>Manage Account</span>
              </span>
              <span className="account__action-seperator">|</span>
              <span className="account__logout" onClick={() => logout()}>
                <AiOutlineLogout className="item__icon" />
                <span>Logout</span>
              </span>
            </div>
          </div>
          {profile?.bio ? (
            <p>
              <strong>Bio: </strong> {capitalizeFirstLetter(profile?.bio)}
            </p>
          ) : null}
        </>
      ) : null}
    </Styles>
  )
}
