import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">AppHeroes</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink class="nav-link" aria-current="page" to="/marvel" activeclassname="active">Marvel</NavLink>
                    <NavLink class="nav-link" to="/dc">DC Comics</NavLink>
                    <NavLink class="nav-link" to="/search">Search</NavLink>
                </div>
            </div>
        </div>
    </nav>
    );
};
