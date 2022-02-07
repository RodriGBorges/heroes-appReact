import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dc } from '../Pages/Dc';
import { Heroe } from '../Pages/Heroe';
import { Marvel } from '../Pages/Marvel';
import { Search } from '../Pages/Search';

export const DashboardRouter = () => {
    return (

        <>
            <Routes>
                <Route path='/marvel' element={<Marvel/>} />
                <Route path='/dc' element={<Dc/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/heroe/:id' element={<Heroe/>} />
                <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>Nada por aquí!</p>
                        </main>}
                    />
            </Routes>
        </>

    );
};