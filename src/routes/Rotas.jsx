import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import { City } from '../components/City/City';
import App from '../App';

export function Rotas(){
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}>
                <Route path="/city/:cityId" element={<City/>} />
            </Route>

            <Route path="*" element={<PageNotFound/>}/>

            </Routes>
        </BrowserRouter>
    )
}