import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./header.css"

const SideBar = (props) => {
  const [state, setState] = useState({
    rotate: "rotate-0deg",
    isShow: "none",
  })
  
  const sideBarListHandler = () => {
    if(state.rotate === "rotate-0deg") {
      setState({ rotate: "rotate-min-90deg", isShow: "flex"})
    } else {
      setState({ rotate: "rotate-0deg", isShow: "none"})
    }
  }
  
  return (
    <div className="side-bar-list">
        <i className="fa-solid fa-xmark" />
      <div className="side-bar-label" onClick={sideBarListHandler}>
        <span >{props.title}</span>
        <i className={`fa-solid fa-angle-left ${state.rotate}`} />
      </div>
      <div className="side-bar-menu" style={{ display: state.isShow }}>
        {props.menuList.map((menu) => 
            <Link to={menu.to} onClick={props.onClick} key={menu.title}>
              {menu.title}
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default SideBar