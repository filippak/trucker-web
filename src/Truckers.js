import React from 'react';
import './style/truckers.css';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import pricingIcon from './pricingIcon.png';
import { Link } from 'react-router-dom';

const Truckers = () => (
  <div className="truckers">
    <div className="container-fluid header-container">
      <img id="bg-truck" className="header-image img-responsive" src={require('./truck_stuck.jpg')} />
      <div className="overlay">
        <div className="overlay-textbox">
          <h1 className="overlay-text"> Stuck on the road again? </h1>
          <h4 className="overlay-text"> No matter where you are, get back on the road with confidence with Checklight </h4>
          <Link to='/'> <button className="btn btn-default btn-sign"> Sign up for instant help </button> </Link>
        </div>
      </div>
    </div>
    <div className="container-fluid how-it-works">
      <h2> How it works </h2>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-12">
          <img src={require('./icons/open.png')} className="how-images icon-1" alt="logo" />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <img src={require('./icons/dispatch.png')} className="how-images icon-2" alt="logo" />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <img src={require('./icons/peace.png')} className="how-images" alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-12">
          <h3> Open Checklight </h3>
          <h6 className="how-info"> Checklight finds you a reliable roadside repair service </h6>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <h3> Dispatch your mechanic </h3>
          <h6 className="how-info"> With a single button press, one of our trusted partners will immediately be dispatched at your location </h6>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <h3> Have a peace of mind </h3>
          <h6 className="how-info"> We work on behalf of the Owner Operator. We deal with all customer service issues on your behalf. We want to get you back on the road as soon as possible!</h6>
        </div>
      </div>
    </div>
    <div className="container-fluid pricing">
    <h2> Pricing </h2>
      <div className="row pricing-text">
        <div className="col-md-6 col-lg-6">
        <h3>We charge $1 per day for the membership. In exchange for your dollar, you get: </h3>
        <ul>
            <li><h4>Immediate roadside repair </h4>
              <h6>Wherever you are</h6>
            </li>
            <li>
              <h4>Customer service claims </h4>
              <h6>Wherever you break down, we still deal with it even if you have left the area.</h6>
            </li>
            <li>
              <h4>The Checklight rewards program </h4>
              <h6>Make that unseen repair a little less painful with discount rewards!</h6>
            </li>
        </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <img src={pricingIcon} className="pricing-icon" alt="logo" />
        </div>
      </div>
    </div>
  </div>

)

export default Truckers
