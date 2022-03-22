import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import {Link,Redirect} from "react-router-dom";
import { useSelector } from 'react-redux'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const Login = ({ btn, msg }) => {
  const credential = useSelector((i) => i.authReducer)
  
console.log(credential.email)

 const auth = getAuth();
 signInWithEmailAndPassword(auth, credential.email, credential.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

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
