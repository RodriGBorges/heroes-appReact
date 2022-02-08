import { heroes } from '../Data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)) {
        throw new Error (`Publisher ${publisher} no válido. ${validPublisher}`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
};
