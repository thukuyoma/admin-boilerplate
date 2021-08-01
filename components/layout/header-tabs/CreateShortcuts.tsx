import { useRouter } from 'next/router'
import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import styled from 'styled-components'
import HeaderTabTitle from './HeaderTabTitle'
import TabsOverlay from './TabsOverlay'

const Styles = styled.div`
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
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    :hover {
      color: #0098db;
    }
  }
  .shortcut__icon {
    margin-right: 5px;
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
          <TabsOverlay>
            <HeaderTabTitle>Create Shortcuts</HeaderTabTitle>
            <div className="shortcut-wrapper">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.title} className="shortcut">
                  <img className="shortcut__image" src={shortcut.icon} />
                  <p className="shortcut__title" onClick={() => router.push(shortcut.url)}>
                    <BiMessageSquareAdd className="shortcut__icon" /> {shortcut.title}
                  </p>
                </div>
              ))}
            </div>
          </TabsOverlay>
        </Styles>
      )}
    </>
  )
}
