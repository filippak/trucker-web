import React from 'react';
import { Link } from 'react-router-dom';
import './style/footer.css';


const Footer = () => (
<div className="footer">
  <nav className="navbar navbar-footer">
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <ul className="list-element-footer">
            <li><h6 className="footer-title">Business</h6></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Partners</a></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Pricing</a></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Security</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <ul className="list-element-footer">
            <li><h6 className="footer-title">Support</h6></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Contact Us</a></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Support</a></li>
            <li><a className="nav-link-footer nav-link" href="" target="_blank">Privacy & Terms</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <ul className="list-element-footer">
            <li><h6 className="footer-title">Connect</h6></li>
            <li><a className="nav-link-footer nav-link" href="https://github.com/filippak" target="_blank"> GitHub</a></li>
            <li><a className="nav-link-footer nav-link" href="https://www.linkedin.com/in/filippa-k%C3%A4rrfelt-29067865/" target="_blank"> LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
)

export default Footer
