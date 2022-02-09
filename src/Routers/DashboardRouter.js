import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Dc } from '../Pages/Dc';
import { Heroe } from '../Pages/Heroe';
import { Marvel } from '../Pages/Marvel';
import { Search } from '../Pages/Search';
import { Navbar } from '../Components/Navbar';

export const DashboardRouter = () => {

    const { pathname } = useLocation()

    localStorage.setItem('lastPath', pathname)

    return (

        <>
            <Navbar/>
            <div className="mt-3">
                <Routes>
                    <Route path='/marvel' element={<Marvel/>} />
                    <Route path='/dc' element={<Dc/>} />
                    <Route path='/search' element={<Search/>} />
                    <Route path='/heroe/:heroeId' element={<Heroe/>} />
                    <Route path="*" element={
                            <main style={{ padding: "1rem" }}>
                                <p>Nada por aquí!</p>
                            </main>}
                        />
                </Routes>
            </div>
        </>

    );
};
