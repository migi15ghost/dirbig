import React from 'react'
import logo from '../logo.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  style={{ "border-bottom": "1.5px solid #53E7FF"}} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor01" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">HABILIDADES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ENCUENTRANOS</a>
              </li>              
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SERVICIOS</a>
              </li>                    
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
