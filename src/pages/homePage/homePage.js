import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HomePage