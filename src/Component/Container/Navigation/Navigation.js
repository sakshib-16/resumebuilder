import classes from './navigation.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

export const Navigation = () => {
  const [show, setShow] = useState(false)
  
  const showHide = () => {
    console.log("jhjh")
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
        <div className={classes.logout}>
          Logout
        </div>: null
      }
      </>
  )
}