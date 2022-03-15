import React from 'react'
import { Login } from './Login'
import Signup from './Signup'

export const Auth = () => {
  return (
    <div>
        <Login btn="Sign In" msg="Nice to see you again" />
        {/* <Signup btn="Sign Up" msg="Make you Account" /> */}
    </div>
  )
}