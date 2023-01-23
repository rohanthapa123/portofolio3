import "./Components/WorkCard/WorkCard.css"
import React from 'react'
import WorkCard from "./Components/WorkCard/WorkCard"
import ProjectData from "./workCardData.js"
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
                {ProjectData.map((value,index)=>{
                    return(
                        <WorkCard key={index}
                        img={value.img}
                        title={value.title}
                        text={value.text}
                        view={value.view}/>
                    )
                })}
            
        </div>
    </div>
  )
}

export default Work