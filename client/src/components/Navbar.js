import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  {NavLink } from 'react-router-dom'
import logo from "../images/message.png";

const Navbar = ()=>{
  return (
    <>
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <NavLink className ="navbar-brand" to="#">
        <img className="navbar-logo" src={logo} alt="logo" />
        <span className=" mx-auto fs-3 fst-italic fw-bold">Postmail</span>
    </NavLink>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto">
      <li className="nav-item">
          <NavLink className ="nav-link" to="/">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className ="nav-link" to="/signup">Register</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link" aria-current="page" to="/create">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className ="nav-link" to="/running">Running</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className ="nav-link" to="/history">History</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className ="nav-link" to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;