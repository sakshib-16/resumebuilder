import React from 'react'
import { Form } from './Form'
import classes from './signup.module.css'

const Signup = ({btn, msg}) => {
  return (
    <div className={classes.signup}>
      <Form btn={btn} msg={msg}/>
      <div className={classes.signin_msg}>
      <p>Already have an account?</p>
      <a href="#">Sign in now</a>
    </div>
    </div>
  )
}

export default Signup