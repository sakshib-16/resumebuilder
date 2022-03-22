import React, {useState } from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import {Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { menu } from '../../Redux/action';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SignupContainer } from './SignupContainer';
import HomePage from '../Container/Homepage/Homepage';


const Signup = ({ btn, msg }) => {
  
  const [menu, setMenu] = useState(false)
  
  const credential = useSelector((i) => i.authReducer)
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, credential.email, credential.password)
 .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   setMenu(true)
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });

  return (
     <>
      {
        !menu ?
      
          <SignupContainer btn={btn} msg={msg} /> :
          <HomePage/>
      }
    </>
    
  )
}

export default Signup