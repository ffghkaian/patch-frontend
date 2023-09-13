import React from "react";
import { Link } from "react-router-dom"

const ArticleCard = (props) => {
  
  return (
    <Link to={`/${props.version}/${props.category}/${props._id}`}>
    <div className="article-list shadow">
      <img src={props.image_url} alt="" />
      <div>
        <div className="title bg-darkblue">
          {props.title.toUpperCase()} 
        </div>
        <div className="description">{props.description}</div>
        <div className="time-uploaded">10/11/2023</div>
      </div>
    </div>
    </Link>
  );
};

export default ArticleCard