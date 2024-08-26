import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Signin from "./Pages/Signin";
import Browse from "./Pages/Browse";
import MyList from "./Pages/MyList";
import Signup from "./Pages/Signup";
import SelectProfiles from "./Pages/SelectProfiles";
import SearchedItemsProvider from "./Context/SearchedItemsProvider";
import WatchListProvider from "./Context/WatchListProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <WatchListProvider>
      <SearchedItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Homepage} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
            <Route path="/selectprofiles" Component={SelectProfiles} />
            <Route path="/browse" Component={Browse} />
            <Route path="/mylist" Component={MyList} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </SearchedItemsProvider>
    </WatchListProvider>
  );
}

export default App;
