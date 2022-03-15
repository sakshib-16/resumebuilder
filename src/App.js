import logo from './logo.svg';
import './App.css';
// import { PersonalDetails } from './Component/Container/Details/PersonalDetails';
import { Experience } from './Component/Container/Details/Experience';
import Template1 from './Component/Container/Templates/Template1/Template1';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      {/* <Template1 /> */}
      <Navigation />
        <Auth />
         {/* <PersonalDetails /> */}
      <Experience/>
    </div>
  );
}

export default App;
