import "./App.css";
import AppRoutes from "./routes";

import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useState } from "react";
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";

function App() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const history = createBrowserHistory();

  const toggleOpenUserMenu = () => {
    setShowUserMenu(showUserMenu ? false : true);
  };

  return (
    <BrowserRouter history={history}>
      <div className="flex-1 bg-[#232736] text-white">
        <TopNav
          showUserMenu={showUserMenu}
          toggleOpenUserMenu={toggleOpenUserMenu}
        />
        <div className="flex relative min-h-screen mx-auto">
          <SideBar />
          <div className=" pl-24 bg-[#232736] bg-opacity-40 rounded w-full py-4 px-3">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
