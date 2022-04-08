import classes from './navigation.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";


const signOutUser = () => {
  const { auth, logout } = getAuth();

  signOut(auth).then(() => {

    console.log("signppout")
    // 
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export const Navigation = () => {
  const [show, setShow] = useState(false)
  
  const showHide = () => {
    if (!show) 
      setShow(true)
    else setShow(false)
  
  }
  return (
    <>
    <div className={classes.nav}>
      <div className={classes.logo}>
      </div>
      <div className={classes.logoutContainer}>
      <div className={classes.user_option} onClick={showHide}>
        <PermIdentityIcon fontSize="medium" />
        <ArrowDropDownIcon fontSize="medium" />

      </div>
      
    </div>
    </div>
    {show ?
        <div className={classes.logout} onClick={signOutUser}>
          Logout
        </div>: null
      }
      </>
  )
}