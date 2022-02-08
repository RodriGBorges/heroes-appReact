import React from 'react';
import { getHeroesByPublisher } from '../Selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <>
            {
                heroes.map(heroe => (
                    <HeroeCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </>
    );
};
