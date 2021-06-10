/* eslint-disable jsx-a11y/interactive-supports-focus */
import Link from 'next/link'
import React from 'react'
import { AiOutlineLogout, AiOutlineProfile } from 'react-icons/ai'
import styled from 'styled-components'
import useAuth from '../../context/auth'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 999;
  width: 220px;
  padding: 15px 15px 20px 15px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 3px;
  box-shadow: 0 3px 12px rgb(27 31 35 / 15%);
  transition: 0.5s;
  color: #051d39;

  .avatar__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .username {
      font-size: 16px;
      font-weight: 700;
    }

    .email {
      font-size: 13px;
      margin-top: 5px;
    }

    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 30px;
      margin-bottom: 15px;
      background: gray;
      position: relative;
      flex-shrink: 0;
      .image {
        border-radius: 80px;
      }
    }
    .image {
      height: 50px;
      width: 50px;
      border-radius: 30px;
      margin-right: 10px;
    }
  }

  .item {
    display: flex;
    align-items: center;
    border-top: 1px solid #5e5e5e1f;
    margin-top: 20px;
    padding-top: 20px;
    cursor: pointer;
    width: 100%;
    .item__icon {
      font-size: 20px;
      margin-right: 10px;
    }
    .item__title {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    right: 5px;
    top: 75px;
  }

  .profile-card-initials {
    height: 50px;
    width: 50px;
    border-radius: 30px;
    background-color: #051d39;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    box-shadow: 0 1px 5px rgb(27 31 35 / 15%);
  }
`

export default function ProfileContainer() {
  const { profile, isLoading, logout } = useAuth()
  return (
    <Styles>
      {!isLoading && profile ? (
        <>
          <Link href="/account/profile">
            <a>
              <div className="avatar__name">
                <div className="avatar">
                  {profile && !isLoading && (
                    <>
                      {profile?.avatar ? (
                        <img src={profile.avatar.url} alt="logo" className="image" />
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
                  {profile.firstName} {profile.lastName}
                </span>
                <span className="email">{profile.email}</span>
              </div>
            </a>
          </Link>
          <Link href="/account/settings">
            <a>
              <div className="item">
                <AiOutlineProfile className="item__icon" />
                <span className="item__title">Profile</span>
              </div>
            </a>
          </Link>
          <div role="button" className="item" onKeyPress={() => logout()} onClick={() => logout()}>
            <AiOutlineLogout className="item__icon" />
            <span className="item__title">Logout</span>
          </div>
        </>
      ) : null}
    </Styles>
  )
}
