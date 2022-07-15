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

    const entries =
      credential !== null ? Object.entries(credential).length : null;

    const auth = getAuth();

    if (entries && !loggedUser) {
      AuthFunction(auth, credential.email, credential.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedUser(user);
          sessionStorage.setItem("loginSession", true);
          sessionStorage.setItem("uid", user.uid);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    return <Auth />;
  };
};
