import React,{useMemo} from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    //optimizado con useMemo
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    //const heroes= getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__backInLeft">
            {
                heroes.map((hero, index) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />

                ))
            }
        </div>
    )
}
