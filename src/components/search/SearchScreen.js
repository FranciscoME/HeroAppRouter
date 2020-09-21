import React, { useMemo } from 'react'
import queryString from 'query-string';//yarn add query-string


import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q='' } = queryString.parse(location.search);//obtiene los ?q=valor

    const initialForm = {
        searchText: q
    }
    
    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { searchText } = formValues;

    

    const heroresFiltered = useMemo(()=>getHeroesByName(q), [q]) ;

   



    const hadleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>

                    <form onSubmit={hadleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            name="searchText"
                            value={searchText}

                        />

                        <button
                            type="submit"
                            className="btn m1 btn-block btn-outline-primary"
                        >Search</button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {(q==='')&&<div className="alert alert-info">
                        Search a hero
                    </div>}


                    {(q!=='' &&heroresFiltered.length===0)&&<div className="alert alert-danger">
                        There is no a hero with{q}
                    </div>}


                    
                    {
                        heroresFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
