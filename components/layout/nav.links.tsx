import Icon from '../icons/index'
import { v4 as uuidv4 } from 'uuid'
import config from '../../config/config'

const links = [
  {
    title: 'Users',
    icon: <Icon name="user" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/questions',
  },
  {
    title: 'Orders',
    icon: <Icon name="order" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/questions',
  },
  // {
  //   title: 'Repairs',
  //   icon: <Icon name="question" />,
  //   id: uuidv4(),
  //   uri: '/questions',
  // },
  // {
  //   title: 'Admins',
  //   icon: <Icon name="question" />,
  //   id: uuidv4(),
  //   uri: '/questions',
  // // },
  // {
  //   title: 'Applications',
  //   icon: <Icon name="question" />,
  //   id: uuidv4(),
  //   uri: '/questions',
  // },
  {
    title: 'Questions',
    icon: <Icon name="question" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/questions',
  },
  // {
  //   title: 'Payments',
  //   icon: <Icon name="question" />,
  //   id: uuidv4(),
  //   uri: '/questions',
  // },
  {
    title: 'Orders',
    icon: <Icon name="order" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/orders',
  },
  {
    title: 'Supports',
    icon: <Icon name="ticket" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/tickets',
  },
  {
    title: 'Dashboad',
    icon: <Icon name="analytics" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/analytics',
  },
  {
    title: 'Blogs',
    icon: <Icon name="blog" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/blogs',
  },
  {
    title: 'Products',
    icon: <Icon name="product" width={18} height={18} fill={config.styles.baseColor} />,
    id: uuidv4(),
    uri: '/products',
  },
  // {
  //   title: 'Technicians',
  //   icon: <Icon name="question" />,
  //   id: uuidv4(),
  //   uri: '/questions',
  // },
  // {
]

export default links
