import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const light = 'light';
  const dark = 'dark';

  return (
    <nav className={`navbar navbar-expand-lg navbar bg-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === light ? dark : light}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className={`nav-link active text-${props.mode === light ? dark : light}`} aria-current="page" to="/">{props.home}</Link> */}
              <a className={`nav-link active text-${props.mode === light ? dark : light}`} aria-current="page" href="/">{props.home}</a>
            </li>
            <li className="nav-item"> 
              {/* <Link className={`nav-link active text-${props.mode === light ? dark : light}`} to="/about" color='white'>About</Link> */}
              {/* <a className={`nav-link active text-${props.mode === light ? dark : light}`} href="/about" color='white'>About</a> */}
            </li>
          </ul>
          
          <div className={`form-check form-switch text-${props.mode === light ? dark : light}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title you have forgotten to give it a name',
  home: 'Same with home :('
}
