import "./WorkCard.css";
import React from "react";
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="card-photoe" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink className={"btn"} to={props.view}>
            View
          </NavLink>
          <NavLink className={"btn"} to={"url.com"}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
    
  );
};

export default WorkCard;
