import classes from './navigation.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

export const Navigation = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
      </div>
      <div className={classes.user_option}>
        <PermIdentityIcon fontSize="medium" />
        <ArrowDropDownIcon fontSize="medium"/>

      </div>
    </div>
  )
}
