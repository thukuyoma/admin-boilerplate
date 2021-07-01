import React from 'react'
import { BiDollar, BiTrendingUp } from 'react-icons/bi'
import { FiMoreVertical } from 'react-icons/fi'
import styled from 'styled-components'

const Styles = styled.div`
  max-width: 400px;

  .analytics__image {
    width: 100px;
    height: 100px;
  }
  .item__group {
    display: flex;
  }
  .product__details {
    display: flex;
  }
  .product-analytics__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export default function BestSellingProducts() {
  return (
    <Styles>
      <div className="analytics__title">
        <span>Best Selling Product</span>
        <FiMoreVertical className="" />
      </div>
      <div className="item__group">
        <div className="product__image">
          <img src="/images/airpod.jpg" className="analytics__image" />
        </div>
        <div className="product__details">
          <div className="analytics__details">
            <BiDollar className="products__" />
            12.124K
          </div>
          <BiTrendingUp className="products__" /> 3.56%
        </div>
      </div>
    </Styles>
  )
}
