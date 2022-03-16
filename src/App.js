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
  
function App() {
  return (
    <div className="App">
      <div className={classes.wrapper}>
         <Layout/>     
      
      {/* <Template1 /> */}
      {/* <Navigation /> */}
          {/* <Auth /> */}
         {/* <CreateResume/> */}

</div>
    </div>
  );
}

export default App;
