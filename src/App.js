// import logo from './logo.svg';
// import './App.css';
import { PersonalDetails } from './Component/Container/Details/PersonalDetails';
import { Experience } from './Component/Container/Details/Experience';
import { Education } from './Component/Container/Details/Education';
import { Skills } from './Component/Container/Details/Skills';
import { Certificates } from './Component/Container/Details/Certificates';
import { Summary } from './Component/Container/Details/Summary';
import { Languages  } from './Component/Container/Details/Languages';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';
import { CreateResume } from './Component/Container/CreateResume/CreateResume';
import classes from './App.module.css';
import { Layout } from './Component/Container/Layout/Layout';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Component/Auth/Login';
import { Templates } from './Component/Container/Template/Templates';
import Signup from './Component/Auth/Signup';
  
function App() {
  return (
    <div className="App">  
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Auth />}/> 
          <Route path="/login" element={<Login btn="Sign in" msg="Nice to see you again" />} /> 
          <Route path="/signup" element={<Signup btn="Sign up" msg="Make you Account" />} />     
          <Route path="/createresume" element={<CreateResume />}/> 
          <Route path="/templates" element={<Templates/>} /> 
          <Route path="/*" element={<Layout/>} /> 

            </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
