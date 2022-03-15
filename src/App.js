// import logo from './logo.svg';
import './App.css';
// import { PersonalDetails } from './Component/Container/Details/PersonalDetails';
import { Experience } from './Component/Container/Details/Experience';

import HomePage from './Component/Container/Homepage/Homepage'
import { Sidebar } from './Component/Container/Details/Sidebar/Sidebar';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <Sidebar/> */}
      {/* <Template1 /> */}
      <Navigation />
        <Auth />
         {/* <PersonalDetails /> */}
      <Experience/>
    </div>
  );
}

export default App;
