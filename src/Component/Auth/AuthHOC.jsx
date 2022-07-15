import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthHOC = (Auth, AuthFunction) => {
  return () => {
    const credential = useSelector((i) => i.authReducer);
    const [loggedUser, setLoggedUser] = useState();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
      loggedUser && navigate("/homepage");
      return () => setLoggedUser("");
    }, [loggedUser]);

    const auth = getAuth();

    AuthFunction(auth, credential.email, credential.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        setLoggedUser(user);
        sessionStorage.setItem("loginSession", true);
        sessionStorage.setItem("uid", user.uid);

        dispatch({ type: "UID", payload: userCredential.user.uid });
      })
      .catch((error) => {
        //console.log(error.message);
      });
    return <Auth />;
  };
};
