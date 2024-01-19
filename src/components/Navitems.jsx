import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navitems = (props) => {
  const location = useLocation();
  const isActive = location.pathname === props.tolink;

  const getLetterStyle = (index) => {
    const validSectionsToTurnYellow = ["main", "aboutme", "ability", "coding", "project"];
    const currentSection = props.item.toLowerCase();
    let color;
      switch (index) {
        case 0:
          color = 'teal';
          break;
        default:
          color = 'black';
      }
    return { color };
  };

  const stylizedItem = props.item
    .split('')
    .map((letter, index) => (
      <span key={index} style={getLetterStyle(index)}>
        {letter}
      </span>
    ));

  return (
    <div id={props.item} className={isActive ? 'active' : ''}>
      <Link to={props.tolink}>{stylizedItem}</Link>
    </div>
  );
};

export default Navitems;
