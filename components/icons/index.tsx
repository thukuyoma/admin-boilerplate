import React from 'react'
import Alert from './Alert'
import Analytics from './Analytics'
import Blog from './Blog'
import Hamburger from './Hamburger'
import Order from './Order'
import Product from './Product'
import Question from './Question'
import Review from './Review'
import Stroke from './Stroke'
import Ticket from './Ticket'
import User from './User'

export default function index(props) {
  switch (props.name.toLowerCase()) {
    case 'question':
      return <Question />
    case 'order':
      return <Order />
    case 'review':
      return <Review />
    case 'product':
      return <Product />
    case 'ticket':
      return <Ticket />
    case 'user':
      return <User />
    case 'blog':
      return <Blog />
    case 'analytics':
      return <Analytics props={props} />
    case 'alert':
      return <Alert />
    case 'stroke':
      return <Stroke />
    case 'hamburger':
      return <Hamburger />
    default:
      return <div />
  }
}
