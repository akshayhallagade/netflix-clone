import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Profile from "./Pages/Profiles";
// import Homepage from "./Pages/Homepage";
import Browse from "./Pages/Browse";
import SearchedItemsProvider from "./Context/SearchedItemsProvider";
import MyList from "./Pages/MyList";
import WatchListProvider from "./Context/WatchListProvider";

function App() {
  return (
    <WatchListProvider>
      <SearchedItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Signup} />
            <Route path="/signin" Component={Signin} />
            <Route path="/profile" Component={Profile} />
            <Route path="/browse" Component={Browse} />
            <Route path="/mylist" Component={MyList} />
          </Routes>
        </BrowserRouter>
      </SearchedItemsProvider>
    </WatchListProvider>
  );
}

export default App;
