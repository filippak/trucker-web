import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from './checklight_logo.svg';
import './style/header.css';
import { Navbar } from 'reactstrap';

const Header = () => (
<div className="header">
    <nav className="navbar navbar-default navbar-header navbar-fixed-top">
      <div className="container-fluid header-elems">
      <ul className="list-element-header">
        <Link to='/'> <img className="navbar-left logo-image img-responsive" src={require('./cl_logo.png')} /> </Link>
        <li> <Link to='/signup' ><button className="btn btn-default btn-header">Sign up</button> </Link> </li>
        <li className=""><Link className="nav-link" to='/team'>About us</Link></li>
        <li className=""><Link className="nav-link" to='/mechanics'>Mechanics</Link></li>
        <li className=""><Link className="nav-link" to='/'>Truckers</Link></li>
      </ul>
      </div>
    </nav>
  </div>
)

export default Header
