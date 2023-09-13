import React, { useState } from "react";
import "./header.css";
import SideBar from "./sidebarList"
import { versionList } from "./menuList"

function Header() {
  const [state, setState] = useState({
    isShow: "hide",
    rotate: "rotate-0deg",
  })
  
  const sideBarHandler = () => {
    if(state.isShow === "hide") {
      setState({ isShow: "show", rotate: "rotate-min-90deg" })
    } else {
      setState({ isShow: "hide", rotate: "rotate-0deg" })
    }
  }
  
  return (
    <>
      <header className="bg-darkblue">
        <div className="header" onClick={sideBarHandler}>
          <img src="/images/20230808_114424.png" alt="" />
          <i className={`fa-solid fa-angle-left ${state.rotate}`} />
        </div>
        <div className="search-bar">
          <input type="text" name="search" id="search" />
          <i className="fa-solid fa-magnifying-glass bg-white" />
        </div>
      </header>
      <div className={`side-bar ${state.isShow}`}>
        <SideBar title="VERSION" menuList={versionList} onClick={sideBarHandler}/>
      </div>
    </>
  );
}

export default Header;
