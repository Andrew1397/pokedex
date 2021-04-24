import * as axios from "axios";


const instance = axios.create({
 
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',

});


export const pokemonsAPI = {
    getPokemons() {
        return instance.get(`?limit=12`)
            .then(response => {
                return response.data;
            });
    },
    getUrlData(url) {
        return axios.get(url)
            .then(response => {
                return response.data;
            })
    },
}


