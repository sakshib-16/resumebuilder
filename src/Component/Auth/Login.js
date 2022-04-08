import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from "react-redux";
import { LoginContainer } from "./LoginContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ btn, msg }) => {
  const credential = useSelector((i) => i.authReducer);
  const [loggedUser, setLoggedUser] = useState();
  let navigate = useNavigate();
  useEffect(() => loggedUser && navigate("/homepage"), [loggedUser]);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, credential.email, credential.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setLoggedUser(user);
      sessionStorage.setItem("loginSession", true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return <LoginContainer btn={btn} msg={msg} />;
};
