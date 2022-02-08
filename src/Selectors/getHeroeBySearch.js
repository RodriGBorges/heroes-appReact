import { heroes } from '../Data/heroes';

export const getHeroeBySearch = (keyword = "") => {
    
    
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()));
    
};
