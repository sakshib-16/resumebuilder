import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import {Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { menu } from '../../Redux/action';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Signup = ({btn, msg}) => {
  const dispatch = useDispatch();
  const credential = useSelector((i) => i.authReducer)

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, credential.email, credential.password)
 .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   dispatch(menu(true))
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });

  return (
    <div className={classes.signup}>
      <div className={classes.banner}>
      </div>
      <div>
      <Form btn={btn} msg={msg}/>
      <div className={classes.signin_msg}>
      <p>Already have an account?</p>
      <Link to="/login"><a href="#">Sign in now</a></Link>
      </div>
      </div>
      </div>
  )
}

export default Signup