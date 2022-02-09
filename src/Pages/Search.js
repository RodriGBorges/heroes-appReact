import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeroeCard } from '../Components/HeroeCard';
import { useForm } from '../Hooks/useForm';
import { getHeroeBySearch } from '../Selectors/getHeroeBySearch';

export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams({
        keyword: ""
    });
    //ver documentacion de useSearchParams

    const [{keyword}, handleInputChange] = useForm({
        keyword: searchParams.get('keyword')
    });

    const resultado = useMemo(() => getHeroeBySearch(searchParams.get('keyword')), [searchParams]);

    const handleSearch = (e) => {
        e.preventDefault()

        setSearchParams({
            keyword
        })
    }



    return (
        <div className="row">
            <div className="col-3">
                <h4>Búsqueda</h4>
                <hr/>
                <form onSubmit={handleSearch}>
                    <input 
                    type="text"
                    placeholder="Buscá tu héroe"
                    className="form-control"
                    name="keyword"
                    value={keyword}
                    onChange={handleInputChange}
                    />
                </form>
            </div>
            <div className="col-9">
                <h4>Resultado</h4>
                <hr/>
                <div className="row animate__animated animate__fadeIn">
                    {
                        searchParams.get('keyword') === "" && 
                        <div className="alert alert-info">
                            Buscar héroe
                        </div>
                    }
                    {
                        searchParams.get('keyword') !== "" &&
                        <div className="alert alert-danger">
                            No se encontraron resultados
                        </div>
                    }
                    {
                        resultado.map(heroe => (
                            <HeroeCard
                            key={heroe.id}
                            {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
