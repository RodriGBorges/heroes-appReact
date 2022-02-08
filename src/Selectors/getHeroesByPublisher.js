import { heroes } from '../Data/heroes';

export const getHeroesByPublisher = (publisher) => {

    

    return heroes.filter(heroe => heroe.publisher === publisher)
};
