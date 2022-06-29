import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { LoginContainer } from "./LoginContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ btn, msg }) => {
  const credential = useSelector((i) => i.authReducer);
  const [loggedUser, setLoggedUser] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => loggedUser && navigate("/homepage"), [loggedUser]);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, credential.email, credential.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.uid);
      getAuth().createCustomToken.user.uid;

      setLoggedUser(user);
      sessionStorage.setItem("loginSession", true);
      sessionStorage.setItem("uid", user.uid);

      dispatch({ type: "UID", payload: userCredential.user.uid });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return <LoginContainer btn={btn} msg={msg} />;
};
