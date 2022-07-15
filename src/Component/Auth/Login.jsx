import React from "react";
import { Form } from "./Form";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
import { AuthHOC } from "./AuthHOC";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginContainer = () => {
  return (
    <div className={classes.login}>
      <div className={classes.banner}></div>
      <div>
        <Form btn="Sign in" msg="Nice to see you again" />
        <div className={classes.signup_msg}>
          <p>Dont have an account?</p>
          <Link to="/">Sign up now</Link>
        </div>
      </div>
    </div>
  );
};

export const Login = AuthHOC(LoginContainer, signInWithEmailAndPassword);
