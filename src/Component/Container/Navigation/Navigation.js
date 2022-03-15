import classes from './navigation.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
