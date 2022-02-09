import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../Selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {

    /* const heroes = getHeroesByPublisher(publisher); */

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    // useMemo() evita peticiones innecesarias, guarda la informacion que ya había antes (los heroes), si no se agregaron nuevos heroes/editaron/borraron o
    // sufrió algun cambio el componente[publisher] trae la informacion de antes/ si detecta algún cambio renderiza otra vez con los nuevos cambios

    return (

        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroeCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>

    );
};
