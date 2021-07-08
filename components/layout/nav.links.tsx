import config from '../../config/config'
import { nanoid } from 'nanoid'
import {
  IconReportAnalytics,
  IconUserCheck,
  IconSchool,
  IconForms,
  IconNews,
  IconMailOpened,
  IconNotebook,
  IconHelp,
  IconSettings,
} from '@tabler/icons'

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
    title: 'Newsletter',
    icon: <IconMailOpened width={20} color="#0C4284" strokeWidth={1.5} />,
    id: nanoid(),
    uri: '/newsletter',
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
