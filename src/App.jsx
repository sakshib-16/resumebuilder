// import logo from './logo.svg';
// import './App.css';
import { CreateResume } from "./Component/Container/CreateResume/CreateResume";
import classes from "./App.module.css";
import { Layout } from "./Component/Container/Layout/Layout";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Component/Auth/Login";
import { Templates } from "./Component/Container/Template/Templates";
import Signup from "./Component/Auth/Signup";
import HomePage from "./Component/Container/Homepage/Homepage";
import Protected from "./Component/Auth/Protected";
import { Temp } from "./Component/Container/Template/Temp";

function App() {
  //  const auth = getAuth();
  //const [authUser,setAuthUser] =useState(false)
  // onAuthStateChanged(auth, (user) => {
  // if (user) {
  //   setAuthUser(true)
  //   // ...
  // } else {
  //   // User is signed out
  //   // ...
  // }
  //});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login btn="Sign in" msg="Nice to see you again" />}
          />
          <Route
            path="/"
            element={<Signup btn="Sign Up" msg="Make you Account" />}
          />
          <Route
            path="/createresume"
            element={
              <Protected>
                <CreateResume />
              </Protected>
            }
          />

          <Route
            path="/homepage"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
          <Route
            path="/layout/*"
            element={
              <Protected>
                <Layout />
              </Protected>
            }
          />
          <Route
            path="/temp/*"
            element={
              <Protected>
                <Temp />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
