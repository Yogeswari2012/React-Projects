import React from 'react';
import './nav.css'
import {Link} from 'react-router-dom'
const Nav= ()=>
{


    return (
        <nav>
        <Link to="/">  <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"></img></Link>
          <div className="nav-links">
             <Link to="/"><p>Home</p></Link> 
             <Link to="/about"> <p>About</p> </Link>
          </div>

        </nav>
    )
}

export default Nav