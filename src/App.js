import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Profile from "./Pages/Profiles";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/profile" Component={Profile} />
        <Route path="/browse" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
