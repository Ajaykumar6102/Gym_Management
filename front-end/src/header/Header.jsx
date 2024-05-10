import React from 'react'
import { Routes, Route } from "react-router-dom";
import './Header.css'
import Logo  from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Register from '../Register';
//import Home from '../../src/pages/Home.js'

const Header = () => {
  
  return (
    <div  className='header'>
        <img src={Logo} alt='' className='logo' />
        <ul className='header-menu' >
          
          <li><Link to='/programs'><button>Programs</button></Link></li>
          <li><Link to={'/why'}><button>Why us</button></Link></li>
         
          <li><Link to='/plans'><button>Plans</button></Link></li>

  
          
          <li><Link to='/home/testimonials'><button>Testimonials</button></Link></li>
          
        </ul>


    </div>
  )
}

export default Header

//<li><Link to='/registeration'><button>register</button></Link></li>
//<li><Link to='/pack'><button>Pack</button></Link></li>