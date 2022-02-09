import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { types } from '../Types/Index';

export const Login = () => {
    
    const {dispatch} = useContext(AuthContext);

    const navigate = useNavigate();
    //cuando se logee, automaticamente te devuelve a la pagina anterior. 

    const lastPath = localStorage.getItem('lastPath') || '/'

    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: 'Rodrigo'
            }
        })

        navigate(lastPath)
        //vuelve a la misma ruta que estaba cuando se logea 

        /* navigate('/') */
        //o -1 -2 para volver páginas atras (buscar documentacion)

    }

    return (
        <div className='mt-5'>
            <h1>Login</h1>
            <hr/>
            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
