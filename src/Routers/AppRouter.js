import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthContext';
import { Login } from '../Pages/Login';
import { DashboardRouter } from './DashboardRouter';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    const estaLogueado = user.logueado;
    // estaLogueado/ 2 valores / true o false

    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path='/login' element={!estaLogueado ? <Login/> : <Navigate to='/'/>} />
                    <Route path='*' element={ estaLogueado ? <DashboardRouter/> : <Navigate to='/login'/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
