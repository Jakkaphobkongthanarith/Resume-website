import React from 'react';
import "./Style.css";
import info from './Information';
import AC from '../Image/AC.jpg';

const Aboutme = () => {
  return (
    <section id="aboutme" className='Aboutme_style'>
      <h1 style={{ fontSize: '50px' }}>{info.aboutmeTitle}</h1>
      <div >
      <h1>Profile</h1>
      {info.Aboutme.map((aboutme, index) => (
          <div key={index} className="Aboutme_Profile">
            <p><strong>Name:</strong> {aboutme.myname}</p>
            <p><strong>Mail:</strong> {aboutme.mail}</p>
            <p><strong>Tel:</strong> {aboutme.tel}</p>
            <p><strong>Github ID:</strong> {aboutme.github}</p>
          </div>
        ))}
        <div>
        <h1>Education</h1>
        <div className="Aboutme-container">
        {info.Education.map((education, index) => (
          <div key={index} >
            <p><strong>University Name:</strong> {education.UniversityName}</p>
            <p><strong>Specialization:</strong> {education.Specialization}</p>
            <p><strong>Year:</strong> {education.Year}</p>
            <img src={education.img} className='Image_Style' style={{ display: 'block', margin: 'auto' }} />


          </div>
        ))}
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default Aboutme;
