import React from 'react';
import DSP from '../Image/DSP.png';
import Proj from '../Image/Senior-proj.png'
import "./Style.css"

const Project = () => {
  return (
    <section id = "project" className= "Project_style">
      <h2 style={{ fontSize: '50px' }}>Project</h2>
      <div className='Proj_row'>
        <a href="https://github.com/Jakkaphobkongthanarith/Digital-image-processing/tree/main/Digital%20Image%20Processing" >
        <div className="image-container">
          <img src={DSP} className='Proj_Style' alt = "Hover Image" />
          <div className = "overlay">
          <p className="overlay-text">Digital Signal Processing Project</p>
          </div>
        </div>
        </a>
        <a href = 'https://github.com/Jakkaphobkongthanarith/Senior_proejct/tree/main/Senior%20Project'>
        <div className="image-container">
          <img src={Proj} className='Proj_Style'/>
          <div className = "overlay">
          <p className="overlay-text">Senior Project</p>
          </div>
        </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
