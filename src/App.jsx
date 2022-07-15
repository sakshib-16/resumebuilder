import { CreateResume } from "./Component/Container/CreateResume/CreateResume";
import { Layout } from "./Component/Container/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/Container/Homepage/Homepage";
import Protected from "./Component/Auth/Protected";
import { Temp } from "./Component/Container/Template/Temp";
import { Login } from "./Component/Auth/Login";
import { Signup } from "./Component/Auth/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
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
