import { useRouter } from 'next/router'
import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import styled from 'styled-components'

const Styles = styled.div`
  .overlay__wrapper {
    position: absolute;
    background-color: #f3f8fe;
    width: 362px;
    height: 100vh;
    top: 60px;
    right: 0;
  }
  .shortcut__header {
    text-align: center;
    margin: 20px 10px;
    margin-bottom: 30px;
  }
  .shortcut-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .shortcut {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 20px;
    height: 100px;
    width: 100px;
  }
  .shortcut__image {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  .shortcut__title {
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      color: #0098db;
    }
  }
  .shortcut__icon {
    margin-right: 5px;
  }
  .wrapper__head {
    text-align: center;
  }
`

const shortcuts = [
  {
    title: 'Blog',
    url: '/blogs/create',
    icon: '/shortcuts/blog.png',
  },
  {
    title: 'Admin',
    url: '/admins/create',
    icon: '/shortcuts/admin.png',
  },
  {
    title: 'Booking',
    url: '/bookings/create',
    icon: '/shortcuts/booking.svg',
  },
  {
    title: 'Scholarship',
    url: '/scholarships/create',
    icon: '/shortcuts/scholarship.svg',
  },
]
export default function CreateShortcuts({ showCreateShortcuts }) {
  const router = useRouter()
  return (
    <>
      {showCreateShortcuts && (
        <Styles>
          <div className="overlay__wrapper">
            <p className="shortcut__header">Create Shortcuts</p>
            <div className="shortcut-wrapper">
              {shortcuts.map((shortcut) => (
                <div className="shortcut">
                  <img className="shortcut__image" src={shortcut.icon} />
                  <p className="shortcut__title" onClick={() => router.push(shortcut.url)}>
                    <BiMessageSquareAdd className="shortcut__icon" /> {shortcut.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Styles>
      )}
    </>
  )
}
