// import logo from './logo.svg';
// import './App.css';
import { PersonalDetails } from "./Component/Container/Details/PersonalDetails";
import { Experience } from "./Component/Container/Details/Experience";
import { Education } from "./Component/Container/Details/Education";
import { Skills } from "./Component/Container/Details/Skills";
import { Certificates } from "./Component/Container/Details/Certificates";
import { Summary } from "./Component/Container/Details/Summary";
import { Languages } from "./Component/Container/Details/Languages";
import { Navigation } from "./Component/Container/Navigation/Navigation";
import { CreateResume } from "./Component/Container/CreateResume/CreateResume";
import classes from "./App.module.css";
import { Layout } from "./Component/Container/Layout/Layout";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Component/Auth/Login";
import { Templates } from "./Component/Container/Template/Templates";
import Signup from "./Component/Auth/Signup";

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
          <Route path="/createresume" element={<CreateResume />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/layout/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
