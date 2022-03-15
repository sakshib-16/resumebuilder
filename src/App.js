// import logo from './logo.svg';
import './App.css';

import HomePage from './Component/Container/Homepage/Homepage'
import { Sidebar } from './Component/Container/Details/Sidebar/Sidebar';

import Template1 from './Component/Container/Template/Template1/Template1';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Template1/> */}
      {/* <HomePage/> */}
      {/* <Sidebar/> */}
      {/* <Template1 /> */}
      <Navigation />
      <Auth />
    </div>
  );
}

export default App;
