import logo from './logo.svg';
import './App.css';
import Template1 from './Component/Container/Templates/Template1/Template1';
import { Auth } from './Component/Auth/Auth';
import { Navigation } from './Component/Container/Navigation/Navigation';
import { CreateResume } from './Component/Container/CreateResume/CreateResume';

function App() {
  return (
    <div className="App">
      {/* <Template1 /> */}
      <Navigation />
      {/* <Auth /> */}
      <CreateResume />
    </div>
  );
}

export default App;
