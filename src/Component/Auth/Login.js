import React from 'react'
import { Form } from './Form'
import classes from './auth.module.css'
import { Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../Container/Homepage/Homepage';
import { menu } from '../../Redux/action';

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const Login = ({btn, msg}) => {
  const dispatch = useDispatch()
  const menu = useSelector(i => i.menuReducer)
  const credential = useSelector((i) => i.authReducer)

  const auth = getAuth();
signInWithEmailAndPassword(auth, credential.email, credential.password)
.then((userCredential) => {
 // Signed in 
 const user = userCredential.user;
 dispatch(menu(true))
 console.log(user)

 // ...
})
.catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
});

  console.log(menu)
  return (
    <div className={classes.login}>
      <div className={classes.banner}>
      </div>
        <div>
        <Form btn={btn} msg={msg} />
        <div className={classes.signup_msg}>
        <p>Dont have an account?</p>
        <Link to="/signup"><a href="#">Sign up now</a></Link>
        </div>
      </div>
    </div>
  )
}
