import classes from "./navigation.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth, signOut } from "firebase/auth";
import { Logo } from "../../logo/Logo";
import { Typography } from "../../logo/Typography";

export const Navigation = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const showHide = () => (!show ? setShow(true) : setShow(false));

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        dispatch({ type: "RESET" });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <Logo />
          <Typography />
        </div>
        <div className={classes.logoutContainer}>
          <div className={classes.user_option} onClick={showHide}>
            <img src="user.svg" alt="user" />
            <ArrowDropDownIcon sx={{ fontSize: 30 }} />
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
