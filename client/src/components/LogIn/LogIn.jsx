import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogIn = () => {

const {loginWithRedirect} = useAuth0();


  return (
    <button 
    onClick={() => loginWithRedirect() }
    >
        LogIn
    </button>
  )
}

export default LogIn