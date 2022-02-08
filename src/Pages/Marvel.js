import React from 'react';
import { getHeroesByPublisher } from '../Selectors/getHeroesByPublisher';

export const Marvel = () => {

    const heroes = getHeroesByPublisher('Marvel Comics');


    return (
        <div>
            <h1>Marvel</h1>
            <hr/>
            <ul>
                {
                    heroes.map(heroe => (
                        <li
                        key={heroe.id}
                        >
                            {heroe.superhero}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};