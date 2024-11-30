import { NavLink } from "react-router-dom";
import "../styles/WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image-pro" />
      <div className="pro-details">
        <h2 className="project-title">{props.title}</h2>
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to={props.src} className="btn">source</NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
