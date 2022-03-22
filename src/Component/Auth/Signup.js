import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import {Link } from "react-router-dom";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Signup = ({btn, msg}) => {

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