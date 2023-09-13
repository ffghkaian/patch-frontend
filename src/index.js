import React, { Suspense, lazy } from "react"
import "./index.css"
import ReacDOM from "react-dom/client"
//import Router from "./routes/router"

const Router = lazy(() => import("./routes/router.js"))

const Loading = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      loading...
    </div>
  )
}

const root = ReacDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback={<Loading />}>
    <Router/>
  </Suspense>
)