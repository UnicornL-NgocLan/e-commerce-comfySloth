import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return <Wrapper className='page-100'>
    <section>
      <h3>Sorry, the page you have tried can not be found</h3>
      <img src='https://i.pinimg.com/originals/af/e2/52/afe2524e0c5047a7024ff3e35cc2b09d.gif' className='error-img' alt=''/>
      <Link to='/' className='btn'>Back Home</Link>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 1rem;
  }
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn{
    margin:2rem auto;
  }
  .error-img{
    max-width:200px;
    max-height:200px;
  }
`

export default ErrorPage
