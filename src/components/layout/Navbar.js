import React from 'react'
import {Link} from 'react-router-dom';
import pic from '../../assets/a.jpeg';
import logo from '../../assets/logo.svg';
import {useFirebase} from 'react-redux-firebase';

export default function Navbar() {
  const firebase=useFirebase();

    return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
    <Link className="navbar-brand" to="/">
    <img
            src={logo}
            height="30px"
            alt="logo"
          />
    </Link>

    <div>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/studentForm" className="btn btn-primary mr-3">
            Add Student
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-a dropdown-toggle"
            href="!#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <img src={pic} height="50px"/>
            <span className="ml-2 navbar-text">Arun Shaw</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="!#">
              Profile
            </a>
            <a onClick={()=> firebase.logout()} className="dropdown-item" href="!#">
              Logout
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="!#">
              Ads
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}
