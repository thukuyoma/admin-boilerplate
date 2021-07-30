import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React from 'react'
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
    width: 100px;
    height: 100px;
  }
  .shortcut__image {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  .shortcut__title {
    margin: 0;
    margin-top: 10px;
    font-size: 16px;
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
    title: 'Blogs',
    url: '/blogs',
    icon: '/shortcuts/blog.png',
  },
  {
    title: 'Admin',
    url: '/admins',
    icon: '/shortcuts/admin.png',
  },
  {
    title: 'Users',
    url: '/users',
    icon: '/shortcuts/users.png',
  },
  {
    title: 'Bookings',
    url: '/bookings',
    icon: '/shortcuts/booking.svg',
  },
  {
    title: 'Scholarships',
    url: '/scholarships',
    icon: '/shortcuts/scholarship.svg',
  },
  {
    title: 'Applications',
    url: '/applications',
    icon: '/shortcuts/application.png',
  },
  {
    title: 'Supports',
    url: '/supports',
    icon: '/shortcuts/support.png',
  },
  {
    title: 'Payments',
    url: '/payments',
    icon: '/shortcuts/payment.png',
  },
  {
    title: 'Dashboard',
    url: '/dashboard/analytics',
    icon: '/shortcuts/dashboard.png',
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: '/shortcuts/settings.png',
  },
]
export default function ShortcutsTab({ showShortcuts }) {
  const router = useRouter()
  return (
    <>
      {showShortcuts && (
        <Styles>
          <TabsOverlay>
            <HeaderTabTitle>Shortcuts</HeaderTabTitle>
            <div className="shortcut-wrapper">
              {shortcuts.map((shortcut) => (
                <div key={nanoid()} className="shortcut">
                  <img className="shortcut__image" src={shortcut.icon} />
                  <p className="shortcut__title" onClick={() => router.push(shortcut.url)}>
                    {shortcut.title}
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
