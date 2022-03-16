// import logo from './logo.svg';
// import './App.css';
import { PersonalDetails } from './Component/Container/Details/PersonalDetails';
import { Experience } from './Component/Container/Details/Experience';
import HomePage from './Component/Container/Homepage/Homepage'
import { Sidebar } from './Component/Container/Details/Sidebar/Sidebar';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';
import { CreateResume } from './Component/Container/CreateResume/CreateResume';
import classes from './App.module.css';
import { Layout } from './Component/Container/Layout/Layout';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Component/Auth/Login';
  
function App() {
  return (
    <div className="App">  
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Auth />}/> 
          <Route path="/login" element={<Login btn="Sign in" msg="Nice to see you again" />} />     
           <Route path="/createResume" element={<CreateResume/>}/> 

            </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
