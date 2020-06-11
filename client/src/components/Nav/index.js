import React from 'react';
import AutoComplete from '../AutoComplete';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav-links-left">
        <Link to='/'>
          <li style={{ boxShadow: '0 2rem 8rem rgba(0, 0, 0, 0.15)' }}>BaliProduct</li>
        </Link>
        <AutoComplete />
        <Link to='/cart'>
          <li className="logo">
            <i className="fas fa-shopping-cart fa-3x"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
}
