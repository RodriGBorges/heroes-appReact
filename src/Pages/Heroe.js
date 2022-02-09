import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../Selectors/getHeroeById';

export const Heroe = () => {

    const {heroeId} = useParams();
    //useParams para traer el id de los parametros

    const navigate = useNavigate()
    // otra forma de volver atrás en vez de hacer un evento onClick

    const heroe = getHeroeById(heroeId);
    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe;


    return (
        <div className="row mt-4 animate_animated animate_fadeIn">
            <div className="col-4">
                <img 
                src={`../assets/heroes/${heroeId}.jpg`} 
                alt={superhero} 
                className="img-thumbnail animate_animated animate_fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <hr/>
                <h4>Characters</h4>
                <p>{characters}</p>
                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};
