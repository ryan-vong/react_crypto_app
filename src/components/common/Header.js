import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import applogo from './bitcoin_logo.png';
const Header = () => {
 return (
 <div className="Header">
 <Link to="/">
 <button type="button" className="button">
 Cryptocurrency App
 </button>
 </Link>
 </div>
 );
}
export default Header;
