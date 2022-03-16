const cities = [
    {
        id: 1,
        name: 'Tokyo',
        description: 'A good place in the world',
        img_url: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-tokyo-capa2019-01.jpg'
    },
    {
        id: 2,
        name: 'New York',
        description: 'New York é um bom lugar',
        img_url: 'https://static.rentcars.com/imagens/modules/localidade/about/983-desktop-location-description.png'
    },
    {
        id: 3,
        name: 'Roma',
        description: 'Roma é um bom lugar na Italia',
        img_url: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-roma-capa2019-01-820x430.jpg'
    }
]

export function getCities(){
    return cities;
}

export function getCity(id){
    return cities.find(e => e.id === id);
}










const continents = ['América do Sul', 'América do Norte', 'Asia', 'Africa', 'Antártida' ,'Europa', 'Oceania'];

export function getContinents(){
    return continents;
}