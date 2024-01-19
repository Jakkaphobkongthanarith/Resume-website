import React from 'react';
import "./Style.css";
import info from './Information';

const Ability= () => {
  return (
    <section id = "ability" className= "Ability_style">
      <div>
      <h1 style={{ fontSize: '50px', marginLeft: '40px' }}>{info.abilityTitle}</h1>
        {info.ability.map((ability, index) => (
          <div key={index}>
              <ul> {ability.ab}</ul>
          </div>
      ))}        
      </div>
    </section>
  );
};

export default Ability;
