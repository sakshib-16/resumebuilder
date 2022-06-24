import React, { useState } from "react";
import classes from "./form.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "./resumelogo.png";
import { useDispatch } from "react-redux";

export const Form = ({ btn, msg }) => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  return (
    <div className={classes.form}>
      <div className={classes.logoImage}>
        <img src={logo} alt="logo" />
      </div>
      <p className={classes.login_msg}>{msg}</p>
      <form>
        <label className={classes.label}>Login</label>
        <div className={classes.input}>
          <input
            className={classes.input_box}
            placeholder="Email or phone number"
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          />
        </div>
        <label className={classes.label}>Password</label>
        <div className={classes.input}>
          <input
            type={auth.showPassword ? "text" : "password"}
            className={classes.input_box}
            placeholder="Enter password"
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          />
          <VisibilityIcon
            sx={{ color: "#4D4D4D", fontSize: 18 }}
            onMouseUp={() => setAuth({ ...auth, showPassword: false })}
            onMouseDown={() => {
              setAuth({ ...auth, showPassword: true });
            }}
          />
        </div>
        {btn === "Sign Up" && (
          <>
            <label className={classes.label}>Re-Password</label>
            <div className={classes.input}>
              <input
                type={auth.reShowPassword ? "text" : "password"}
                className={classes.input_box}
                placeholder="Enter password"
                onChange={(e) =>
                  setAuth({ ...auth, repassword: e.target.value })
                }
              />
              <VisibilityIcon
                sx={{ color: "#4D4D4D", fontSize: 18 }}
                onMouseUp={() => setAuth({ ...auth, reShowPassword: false })}
                onMouseDown={() => {
                  setAuth({ ...auth, reShowPassword: true });
                }}
              />
            </div>
          </>
        )}

        <div className={classes.options}>
          <div>
            <div className={classes.toggle}>
              <div></div>
            </div>
            <label>Remember me</label>
          </div>
          <a href="">Forgot password?</a>
        </div>

        <button
          className={classes.btn}
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "auth", payload: auth });
          }}
        >
          {btn}
        </button>
      </form>
    </div>
  );
};
