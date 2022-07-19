import { getAuth } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export const AuthHOC = (Auth, AuthFunction) => {
  return () => {
    const user = useContext(AuthContext).user;
    const [loggedUser, setLoggedUser] = useState();
    let navigate = useNavigate();

    useEffect(() => {
      loggedUser && navigate('/homepage');
      return () => setLoggedUser('');
    }, [loggedUser]);

    const entries = user !== null ? Object.entries(user).length : null;

    const auth = getAuth();

    if (entries && !loggedUser) {
      AuthFunction(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedUser(user);
          sessionStorage.setItem('loginSession', true);
          sessionStorage.setItem('uid', user.uid);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    return <Auth />;
  };
};
