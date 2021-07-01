import config from '../../config/config'
import { nanoid } from 'nanoid'
import { RiBookletLine, RiFilePaperLine, RiAdminLine, RiSettings2Line } from 'react-icons/ri'
import { FaWpforms } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineDashboard } from 'react-icons/ai'

const links = [
  {
    title: 'Dashboad',
    icon: <AiOutlineDashboard className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/dashboard',
  },
  {
    title: 'Admins',
    icon: <RiAdminLine className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/admins',
  },
  {
    title: 'Scholarships',
    icon: <MdSchool className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/scholarships',
  },
  {
    title: 'Applications',
    icon: <FaWpforms className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/applications',
  },
  {
    title: 'Newsletter',
    icon: <BsNewspaper className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/newsletter',
  },
  {
    title: 'Bookings',
    icon: <RiBookletLine className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/bookings',
  },
  {
    title: 'Blogs',
    icon: <RiFilePaperLine className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/blogs',
  },
  {
    title: 'Supports',
    icon: <BiSupport className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/supports',
  },
  {
    title: 'Settings',
    icon: <RiSettings2Line className="side-nav-link___icon" />,
    id: nanoid(),
    uri: '/settings',
  },
]

export default links
