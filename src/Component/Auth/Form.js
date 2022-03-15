import React, { useState } from 'react'
import classes from './form.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Form = ({btn, msg}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [reShowPassword, setReShowPassword] = useState(false)
  return (
    <div className={classes.form}>
      <p className={classes.login_msg}>{msg}</p>
    <form>
      <label className={classes.label}>Login</label>
      <div className={classes.input}>
      <input className={classes.input_box} placeholder="Email or phone number"/>
          </div>
      <label className={classes.label}>Password</label>
      <div className={classes.input}>
        <input type={showPassword ? 'text' : 'password'} className={classes.input_box} placeholder="Enter password" />
        <VisibilityIcon fontSize="very-small" sx={{color: '#4D4D4D'}} onMouseUp={() => setShowPassword(false)} onMouseDown={() => {
            setShowPassword(true)
            }}/>
      </div>
      <label className={classes.label}>Re-Password</label>
      <div className={classes.input}>
      <input type={reShowPassword ? 'text' : 'password'} className={classes.input_box} placeholder="Enter password"/>
      <VisibilityIcon fontSize="very-small" sx={{color: '#4D4D4D'}} onMouseUp={() => setReShowPassword(false)} onMouseDown={() => {
            setReShowPassword(true)
            }}/>
      </div>

      <div className={classes.options}>
          <div>
              <div className={classes.toggle}>
                 <div></div>
              </div>
          <label>Remember me</label>
          </div>
        <a href="">Forgot password?</a>
      </div>
      <button className={classes.btn}>{btn}</button>
    </form>
    </div>
  )
}