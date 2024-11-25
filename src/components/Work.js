import "../styles/WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCarData from "./WorkCardData"

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCarData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              src={val.src}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Work;

