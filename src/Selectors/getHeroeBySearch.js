import { heroes } from '../Data/heroes';

export const getHeroeBySearch = (keyword = "") => {
    
    if(keyword === "") {
        return []
    }
    //si la keyword esta vacía que nos devuelva un array vacío/ sino nos trae todos los heroes

    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()));
    
};
