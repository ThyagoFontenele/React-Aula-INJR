import { getCities } from '../../data';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css'

export function Header(){

    const [cities, setCities ] = useState([]);

    useEffect(() => {
      setCities(getCities());
    },[])
    return(
        <header className={classes.header}>
            <nav>
                {cities.map( city => 
                    <Link to={`/city/${city.id}`} key={city.id}>{city.name}</Link>
                )}
            </nav>
        </header>
    )
}