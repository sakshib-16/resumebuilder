import classes from "./navigation.module.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

export const Navigation = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const showHide = () => (!show ? setShow(true) : setShow(false));

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sessionStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logo}></div>
        <div className={classes.logoutContainer}>
          <div className={classes.user_option} onClick={showHide}>
            <PermIdentityIcon fontSize="medium" />
            <ArrowDropDownIcon fontSize="medium" />
          </div>
        </div>
      </div>
      {show ? (
        <div className={classes.logout} onClick={logout}>
          Logout
        </div>
      ) : null}
    </>
  );
};
