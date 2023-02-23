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
      <div className="flex-1 w-screen h-screen xbg-[#1e2024] bg-[url(https://wallpapercave.com/wp/wp9378806.jpg)] bg-cover text-white">
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-90 backdrop-blur-3xl">
          <TopNav
            showUserMenu={showUserMenu}
            toggleOpenUserMenu={toggleOpenUserMenu}
          />
          <div className="flex relative min-h-screen w-full xmx-auto">
            <SideBar />
            <div className="fixed xtop-[50px] w-full sm:w-[calc(100%-80px)] overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-thumb-rounded-full sm:ml-20 pb-20 xbg-[#353749] rounded-tl-lg box-border">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
