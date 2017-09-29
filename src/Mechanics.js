import React from 'react';
import {Link} from 'react-router-dom';
import './style/mechanics.css';
import './style/truckers.css';

const Mechanics = () => (
  <div className="mechanics">
    <div className="container-fluid header-container">
      <img id="bg-truck" className="header-image-mech img-responsive" src={require('./icons/truck-repair.jpeg')} />
      <div className="overlay">
        <div className="overlay-textbox">
        <h1 className="overlay-text"> Looking for new customers? </h1>
        <h4 className="overlay-text"> Join the Checklight program and let more people find your repair shop </h4>
          <Link to='/signup'> <button className="btn btn-default btn-sign"> Join Checklight </button> </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Mechanics
