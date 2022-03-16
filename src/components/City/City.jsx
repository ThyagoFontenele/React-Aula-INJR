import { getCity } from '../../data';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import classes from './City.module.css';
export function City(){
    const { cityId } = useParams();
    const [city, setCity ] = useState({});

    useEffect(() => {
       setCity(getCity(Number(cityId)));
    }, [cityId]);
    return(
        <div className={classes.container}>
            <h2>{city.name}</h2>
            <p>{city.description}</p>
            <img src={city.img_url} alt={`foto da cidade de ${city.name}`} />
        </div>
    )
}