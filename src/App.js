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
      <div className="flex-1 bg-[#1e2024] text-white">
        <TopNav
          showUserMenu={showUserMenu}
          toggleOpenUserMenu={toggleOpenUserMenu}
        />
        <div className="flex relative min-h-screen w-full mx-auto">
          <SideBar />
          <div className="fixed top-[50px] w-[calc(100%-80px)] overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-thumb-rounded-full ml-20 pb-20 bg-[#353749] rounded-tl-lg box-border">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
