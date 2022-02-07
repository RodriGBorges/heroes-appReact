import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../Pages/Login';
import { DashboardRouter } from './DashboardRouter';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='*' element={<DashboardRouter/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
