import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import "./details.css"
import Footer from "../footer/footer"

import { HOST } from "../../utils/conn"

const Details = (props) => {
  const [state, setState] = useState([])
  
  const params = useParams()
  
  useEffect(() => {
    const findData = async (req, res) => {
      const _id = params.id.toString()
      const category = params.category.toString()
      const version = params.version.toString()
      
      const { data } = await axios.get(
        `${HOST+version}/${category}/${_id}`,
        {},
        { withCredentials: true }
      )
      
      setState(data)
    }
    
    findData()
  }, [])
  
  return (
    <>
    <img src={state.image_url} alt="" className="hero-image"/>
    <div className="article">
      <div className="article-container">
        <h1>
          {state.title}
          <span className="time-uploaded">Uploaded <br /> 11/12/2012</span>
        </h1>
        <div className="article-desc">
          {state.description}
        </div>
        <div className="patch-detail">
        <h2 style={{ textAlign: "center"}}>PATCH DETAIL</h2>
          <div>Patch Name <span>{state.title}</span></div>
          <div>Patch category <span>{state.category}</span></div>
          <div>PES version <span>{state.version}</span></div>
          <div>Patch size <span>125kb</span></div>
          <div>Patch Uploaded <span>11/12/2013</span></div>
          <button className="download-button">
            <i className="fa-solid fa-cloud-arrow-down" />
            DOWNLOAD
          </button>
          <div className="alert-warning">
            If link error, please contact us.
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Details