import React, { useState, useEffect } from 'react';
import Header from "../../components/header/header"
import axios from "axios"
import { Link } from 'react-router-dom'
import "./pes2021.css"

import ArticleCard from "./articleCard"
import Footer from "../../components/footer/footer"
import { HOST } from "../../utils/conn"


const Pes2021 = () => {
  const [transfer, setTransfer] = useState([])
  const [stadium, setStadium] = useState([])
  const [last, setLast] = useState([])
  
  useEffect(() => {
    const getData = async (req, res) => {
      const { data } = await axios.get(`${HOST}pes_2021_data`)
      
      const latesUpdate = data.transfer_updates.slice(-1)
      
      setTransfer(data.transfer_updates)
      setStadium(data.stadium_patch)
      setLast(latesUpdate)
    }

    getData()
  }, [])
  
  return (
    <div className="pes-2021">
      <Header />
      {
        last.map((article) => <img src={article.image_url} alt=""
        className="hero-image" key={article._id}/>)
      }
      <h2 className="h2 bg-darkblue">Updates Patch </h2>
      <hr />
      {
        transfer.map((article) => 
          <ArticleCard key={article._id} {...article} />
        )
      }
      <div className="jersey-patch">
        <div className="jersey-description">
          <h2>New Jersey </h2>
          <p>
            files are big, only manual installation, see instructions below 
            - users can add more stadiums from other sources, 
          </p>
          <button className="btn bg-watermelon"> SEE MORE</button>
        </div>
        <img src="./images/patch/image.jpeg" alt="" className="img"/>
      </div>
      <h2 className="h2 bg-darkblue"
        style={{marginTop: "50px"}}
      >Stadium Patch </h2>
      <hr/>
      <div className="stadium-list">
        {
          stadium.map((stadium) => 
            <div key={stadium._id} className="stadium-card">
              <Link to={`/${stadium.version}/${stadium.category}/${stadium._id}`}>
                <img src={stadium.image_url} alt="" />
                <div className="title-description">
                  {stadium.title}
                  <span>10/12/1023</span>
                </div>
              </Link>
            </div>
          )
        }
      </div>
      
      <Footer />
    </div>
  )
}

export default Pes2021