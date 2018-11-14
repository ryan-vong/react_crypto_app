import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import applogo from './bitcoin_logo.png';
const Header = () => {
 return (
 <div className="Header">
 <Link to="/">
 <img src={applogo} className="Header-logo" alt="logo for ReactJS
application" />
 </Link>
 </div>
 );
}
export default Header;
