import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import {Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const Login = ({btn, msg}) => {
  return (
  <div className={classes.login}>
    <div className={classes.banner}>
    </div>
    <div>
     <Form btn={btn} msg={msg} />
     <div className={classes.signup_msg}>
       <p>Dont have an account?</p>
     <Link to="/signup"><a href="#">Sign up now</a></Link>
     </div>
    </div>
  </div>
  )
}
