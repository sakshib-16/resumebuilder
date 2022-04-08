import React from "react";
import { Form } from "./Form";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
export const LoginContainer = ({ btn, msg }) => {
  return (
    <div className={classes.login}>
      <div className={classes.banner}></div>
      <div>
        <Form btn={btn} msg={msg} />
        <div className={classes.signup_msg}>
          <p>Dont have an account?</p>
          <Link to="/">
            <a href="#">Sign up now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
