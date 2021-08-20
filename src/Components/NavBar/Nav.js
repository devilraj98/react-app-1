import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div className ="container-fluid">
        <div className="row">
       
          <nav className="navbar navbar-dark bg-dark">
          <a href="#"className="navbar-brand">GeekForGeek</a>
          <ul className= "navbar">
          <li className="nav-list"> <Link className="nav-link text-white" to="/home">Home</Link></li>
          <li className="nav-list"> <Link className="nav-link text-white" to="/main">Main</Link></li>
          <li className="nav-list"> <Link className="nav-link text-white" to="/hooks">Hooks</Link></li>
          <li className="nav-list"> <Link className="nav-link text-white" to="/user">User</Link></li>
          <li className="nav-list"> <Link className="nav-link text-white" to="/counter">Counter</Link></li>
          <li className="nav-list"> <Link className="nav-link text-white" to="/context">Context</Link></li>
          </ul>
          
          
          </nav>
          </div>
        </div>
    );
}

export default Nav;