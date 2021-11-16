import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart} = useCartContext()
  if(cart.length<1){
    return(
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your Cart is empty</h2>
          <div>
            <img src='https://i.pinimg.com/originals/ff/98/6c/ff986c4116c1551007ff0152e2a4d85e.gif'/>
          </div>
          <Link to='/products' className="btn">
              Fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return <main>
    <PageHero title="Cart"/>
    <Wrapper className="page">
      <CartContent/> 
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
    img{
      width:250px;
      height:250px;
    }
  }
`

export default CartPage
