import { heroes } from '../Data/heroes';

export const getHeroeById = (id) => {

    

    return heroes.find(heroe => heroe.id === id);
};
