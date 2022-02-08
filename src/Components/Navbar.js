import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Heroes App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" aria-current="page" to="/marvel">Marvel</NavLink>
                    <NavLink className="nav-link" to="/dc">DC Comics</NavLink>
                    <NavLink className="nav-link" to="/search">Search</NavLink>
                </div>
            </div>
        </div>
    </nav>
    );
};
