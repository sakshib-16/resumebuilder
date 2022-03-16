import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'

export const Login = ({btn, msg}) => {
  return (
  <div className={classes.login}>
    <div className={classes.banner}>
    </div>
    <div>
     <Form btn={btn} msg={msg} />
     <div className={classes.signup_msg}>
       <p>Dont have an account?</p>
       <a href="#">Sign up now</a>
     </div>
    </div>
  </div>
  )
}
