import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { types } from '../Types/Index';

export const Navbar = () => {

    const navigate = useNavigate()

    const {user, dispatch} = useContext(AuthContext);
    const {name} = user;

    const handleLogout = () => {
        dispatch({
            type: types.logout,
            payload: null
        });

        navigate('/login')
    }

    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <p className="nav-item nav-link text-info mb-0">
                        {name}
                    </p>
                    <button
                        className="nav-item nav-link border-0 bg-transparent"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>

        </div>
    </nav>
    );
};
