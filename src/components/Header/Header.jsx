import React from 'react'
import './Header.css'
import {SiAirplayvideo} from 'react-icons/si'
const Header = () => {
  return (
    <div>
    <div className="navbar navbar-expand-md cyborg-navbar navbar-dark">
    <div className="container">
        <a href="#" className="navbar-brand"><SiAirplayvideo className='fs-3 icon'/><span className='icon fs-6 ms-1 fw-bold'>App</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Browser</a>
                    <ul className="dropdown-menu">
                        <li><a href="#learn" className="dropdown-item">Datalist</a></li>
                        <li><a href="#next" className="dropdown-item">Fortnite</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a href="#faq" className="nav-link">profile</a></li>
            </ul>
        </div>
    </div>
</div>
    </div>
  )
}

export default Header
