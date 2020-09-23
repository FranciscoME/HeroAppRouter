import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

    //Recibe el parametro enviado en la url: www.../hero/id
    const params = useParams();

    const { heroeId } = params;

    // optimizado con useMemo
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    //const hero = getHeroesById(heroeId);

    //si no hay un url(id)correcto lo redirijo
    if (!hero) {
        return <Redirect to="/" />
    }


    const handleReturn = () => {

        //podemos usar
        //history.replace('./') o history.push('./')
        //tambien history.goBack(); que regresa a la pagina anterior visitada

        //si NO hay registro de la pagina anterior
        if (history.length <= 2) {
            history.push('./');
        }
        //si hay registro de visita a la pagina anterior
        else {
            history.goBack();
        }
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    console.table(heroeId, id);

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${id}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInDown"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:</b> {first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
