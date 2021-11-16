import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
  const {isLoading,error} = useAuth0()
  if(isLoading){
    return <Wrapper>
      <img 
      alt=''
      src='https://3.bp.blogspot.com/-6MgFIK2j8V0/XdqNf5KrH5I/AAAAAABHScM/kDOnnOHvQt8LIr5rO1sQ89MsU1lVzmrgwCLcBGAsYHQ/s1600/AW4101957_06.gif'/>
    </Wrapper>
  }
  if(error){
    return <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper>
  } 
  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img{
    height:250px;
    width:250px;
  }
`

export default AuthWrapper
