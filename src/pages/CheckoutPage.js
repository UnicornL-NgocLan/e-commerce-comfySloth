import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const {cart} = useCartContext()
  return <main>
    <PageHero title="Checkout"/>
    <Wrapper className='page'>
      {cart.length < 1 ? <div className='empty'>
        <h2>Your cart is empty</h2>
        <div>
          <img className='empty-img' src='https://i.pinimg.com/originals/c2/50/74/c250747cd24ebc086c8bdda076ceb811.gif'/>
        </div>
        <Link className='btn' to='/products'>Fill it</Link>
      </div> : <StripeCheckout/>}
    </Wrapper>
  </main>
}
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  .empty{
    text-align:center;
    .empty-img{
      width:250px;
      height:250px;
    }
  }
`
export default CheckoutPage
