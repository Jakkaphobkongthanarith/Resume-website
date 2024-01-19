import React, { Component, useEffect }  from 'react';
import Navitems from './Navitems';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeSection: null,
        };
      }

      handleSetActive = (to) => {
        this.setState({ activeSection: to });
      };

      render () {
        return (
                <nav className='track'>
                    <ScrollLink to="main" smooth={true} duration={500}>
                        <Navitems item = "Main" tolink = "/main" className = "Main_style"></Navitems> </ScrollLink>
                    <ScrollLink to="aboutme" smooth={true} duration={500} >
                        <Navitems item = "About Me" tolink = "/aboutme"></Navitems> </ScrollLink>
                    <ScrollLink to="ability" smooth={true} duration={500}>
                            <Navitems item = "Ability" tolink = "/ability"></Navitems>  </ScrollLink>
                    <ScrollLink to="coding" smooth={true} duration={500}>
                        <Navitems item = "Coding" tolink = "/coding"></Navitems>  </ScrollLink>
                    <ScrollLink to="project" smooth={true} duration={500}>
                        <Navitems item = "Project" tolink = "/project"></Navitems>  </ScrollLink>
                </nav>
            );
        }
    }
export default Navbar;
