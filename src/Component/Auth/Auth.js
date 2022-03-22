import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from '../Container/Homepage/Homepage'
import Signup from './Signup'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { menu } from '../../Redux/action';

export const Auth = () => {

  // const [menu, setMenu] = useState(false)
  
  // console.log(credential.email)
  // console.log(credential.length)
  
  return (
    
    <div>
          <Signup btn="Sign Up" msg="Make you Account" />

    </div>
  )
}
