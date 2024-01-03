import React from 'react'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div id="about">
        <h1>About</h1>
        <Link to="navbar"  spy={true}  smooth={true} duration={500}>
          Navbar
        </Link>
    </div>
  )
}

export default About