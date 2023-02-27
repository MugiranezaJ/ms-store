import "./App.css";
import AppRoutes from "./routes";

import { BrowserRouter, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect, useRef, useState } from "react";
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";

function App() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const history = createBrowserHistory({scrollRestoration: "manual"});
  const myDivRef = useRef(null);

  const toggleOpenUserMenu = () => {
    setShowUserMenu(showUserMenu ? false : true);
  };

  // Check this and fix the issue with auto scroll to the top even when you click on user icon
  function ScrollToTopOnRouteChange() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
      myDivRef.current.scrollTop = 0;
    }, [pathname]);
  
    return null;
  }

  return (
    <BrowserRouter history={history}>
      <ScrollToTopOnRouteChange/>
      <div className="flex-1 w-screen h-screen xbg-[#1e2024] bg-[url(https://wallpapercave.com/wp/wp9378806.jpg)] bg-cover text-white">
        <div className="absolute inset-0 bg-[#2e2f3a] bg-opacity-50 backdrop-blur-3xl backdrop-brightness-75">
          <TopNav
            showUserMenu={showUserMenu}
            toggleOpenUserMenu={toggleOpenUserMenu}
          />
          <div className="flex z-10 relative min-h-screen w-full xmx-auto">
            <SideBar />
            <div ref={myDivRef} className="fixed overflow-x-hidden xtop-[50px] w-full sm:w-[calc(100%-80px)] overflow-y-scroll bg-[#272727] bg-opacity-70 h-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-thumb-rounded-full sm:ml-20 pb-20 xbg-[#353749] rounded-tl-lg box-border">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
