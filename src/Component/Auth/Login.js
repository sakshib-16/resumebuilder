import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../Container/Homepage/Homepage";
import { menu } from "../../Redux/action";
import { LoginContainer } from "./LoginContainer";

export const Login = ({ btn, msg }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((i) => i.menuReducer);
  const credential = useSelector((i) => i.authReducer);
  // const [menu, setMenu] = useState(false);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, credential.email, credential.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sessionStorage.setItem("loginSession", true);
      dispatch(menu(true));
      // setMenu(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  const currentSession = sessionStorage.getItem("loginSession");
  return (
    <>
      {!currentSession ? <LoginContainer btn={btn} msg={msg} /> : <HomePage />}
    </>
  );
};
