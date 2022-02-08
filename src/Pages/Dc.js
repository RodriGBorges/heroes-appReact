import React from 'react';
import { getHeroesByPublisher } from '../Selectors/getHeroesByPublisher';

export const Dc = () => {

    const heroes = getHeroesByPublisher('DC Comics');

    return (
        <div>
            <h1>DC Comics</h1>
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
