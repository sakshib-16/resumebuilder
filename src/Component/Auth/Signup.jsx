import React from "react";
import { Form } from "./Form";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
import { AuthHOC } from "./AuthHOC";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupContainer = () => {
  return (
    <div className={classes.signup}>
      <div className={classes.banner}></div>
      <div>
        <Form btn="Sign Up" msg="Make you Account" />
        <div className={classes.signin_msg}>
          <p>Already have an account?</p>
          <Link to="/login">Sign in now</Link>
        </div>
      </div>
    </div>
  );
};

export const Signup = AuthHOC(SignupContainer, createUserWithEmailAndPassword);
