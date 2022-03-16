import { useEffect, useState } from "react";
import classes from './Formulario.module.css';
import { getContinents } from "../../data";
export function Formulario(){

    const [continents, setCotinents] = useState([]);
    const [name, setName] = useState('');
    const [continent, setContinent] = useState('');

    useEffect(() => {
        setCotinents(getContinents());
    }, [])
    
    return(
        <div className={classes.container}>
            <p>{name}</p>
            <p>{continent}</p>
            <form>
                <label>Continente</label>
                <input type="text" value={name} onChange={e => setName(e.target.value) }/>
                <select name="continent" value={continent} onChange={e => setContinent(e.target.value)}>
                    <option value="">Selecione o País</option>
                    {continents.map(e => (
                        <option key={e} value={e}>{e}</option>
                    ))}
                </select>
                <button onClick={(e) => e.preventDefault()}>Enviar</button>
            </form>
        </div>
    )
}