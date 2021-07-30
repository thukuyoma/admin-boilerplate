import { nanoid } from 'nanoid'
import {
  IconReportAnalytics,
  IconUserCheck,
  IconSchool,
  IconForms,
  IconNews,
  IconNotebook,
  IconHelp,
  IconSettings,
  IconCreditCard,
  IconUser,
} from '@tabler/icons'
import React from 'react'

const links = [
  {
    title: 'Dashboad',
    icon: <IconReportAnalytics width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/analytics/dashboard',
  },
  {
    title: 'Admins',
    icon: <IconUserCheck width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/admins',
  },
  {
    title: 'Users',
    icon: <IconUser width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/users',
  },
  {
    title: 'Scholarships',
    icon: <IconSchool width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/scholarships',
  },
  {
    title: 'Applications',
    icon: <IconForms width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/applications',
  },
  {
    title: 'Payments',
    icon: <IconCreditCard width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/payments',
  },
  {
    title: 'Bookings',
    icon: <IconNotebook width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/bookings',
  },
  {
    title: 'Blogs',
    icon: <IconNews width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/blogs',
  },
  {
    title: 'Supports',
    icon: <IconHelp width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/supports',
  },
  {
    title: 'Settings',
    icon: <IconSettings width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/settings',
  },
]

export default links
