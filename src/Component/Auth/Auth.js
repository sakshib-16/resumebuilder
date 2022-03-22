import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HomePage from '../Container/Homepage/Homepage'
import Signup from './Signup'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {

  const [menu, setMenu] = useState(false)
  
  const credential = useSelector((i) => i.authReducer)
  
  console.log(credential.email)
  
  if (credential.repassword) {
    const auth = getAuth();
   createUserWithEmailAndPassword(auth, credential.email, credential.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    setMenu(true)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
  }
  else {
    console.log("hhhh")
  //   const auth = getAuth();
  //  signInWithEmailAndPassword(auth, credential.email, credential.password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   setMenu(true)

  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  }
  
  return (
    
    <div>
      {
       !menu ? 
          <Signup btn="Sign Up" msg="Make you Account" /> :
          
         <HomePage/>

      }

    </div>
  )
}
