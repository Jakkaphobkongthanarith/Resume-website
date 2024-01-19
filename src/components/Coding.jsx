// coding.jsx

import React from 'react';
import "./Style.css"
import info from './Information';  // Update the import statement for the info object

const Coding = () => {
  return (
    <section id="coding" className="Coding_style">
      <h2 >{info.codingsTitle}</h2>
      <div className="code-container">
      {info.codings.map((coding, index) => (
        <div key={index} style={{ fontSize: '25px' }}>
          <h2>
            {coding.codingname}
          </h2>
          <br></br>
          <img src={coding.imgurl} alt={coding.codingname} className='Image_Style' />
        </div>
      ))}
      </div>
    </section>
  );
};

export default Coding;
