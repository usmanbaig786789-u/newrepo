// import PropTypes from "prop-types";
import React from 'react';
// import { link } from 'react-router-dom';

function Navbar(props) {
return (
<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            {props.title2}
                        </a>
                    </li>
                </ul>

            </div>
                <div className="form-check form-switch">
    <input className="form-check-input" onClick={props.darkMode} type="checkbox" id="flexSwitchCheckDefault"/>
    <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.btnmode}</label>
</div>
        </div> 
    </nav>
</>
);
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string,
// };


// Navbar.defaultProps= {
// title: "Set title here",
// };

export default Navbar;