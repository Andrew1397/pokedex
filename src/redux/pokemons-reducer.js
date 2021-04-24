import { pokemonsAPI } from "../api/api"

const SET_POKEMONS = 'SET_POKEMONS'
const SET_NEW_POKEMONS = 'SET_NEW_POKEMONS'
const SET_NEXT_PAGE = 'SET_NEXT_PAGE'
const SET_CURENT_POKEMONS='SET_CURENT_POKEMONS'
const LOAD_NEW_POKEMONS = 'LOAD_NEW_POKEMONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    pokemons:null,
    next: '',
    currentPokemon: 1,
    isFetching: true,
}



const pokemonsReduser = (state=initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS: {
            return {...state, pokemons: action.pokemons}
        }
        case SET_NEXT_PAGE: {
            return {... state, next: action.nextPokemonsPage}
        }
       case LOAD_NEW_POKEMONS:{
           return{...state,pokemons:[...state.pokemons,...action.newPokemons]}
       }
       case TOGGLE_IS_FETCHING: {
        return { ...state, isFetching: action.isFetching}
    }
        case  SET_CURENT_POKEMONS: {
            return {...state, currentPokemon: action.currentPokemon}
        }
        default:
            return state;
    }
    
}

export const setPokemonsAC = (pokemons) => ({type: SET_POKEMONS, pokemons})
export const setNewPokemons = (newPokemons, nextPage) => ({type: SET_NEW_POKEMONS, newPokemons, nextPage})
export const nextPageAC = (nextPokemonsPage) => ({type: SET_NEXT_PAGE, nextPokemonsPage})
export const addNewPokemons = (newPokemons) => ({type:LOAD_NEW_POKEMONS, newPokemons})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const selectPokemon = (currentPokemon) => ({type: SET_CURENT_POKEMONS, currentPokemon})

export const setPokemons = () => async(dispatch) => {
    // debugger;
    dispatch(toggleIsFetching(true))
     pokemonsAPI.getPokemons().then(async response => {
        let pok = response.results
        let processedPok = await Promise.all(pok.map(async(p)=>{
            let pokData = await pokemonsAPI.getUrlData(p.url)
            return{...p, pokData}
        }))
        dispatch(setPokemonsAC(processedPok));
        dispatch(nextPageAC(response.next))
        dispatch(toggleIsFetching(false))
    } )
}

// export const getPokemonData =()=>(dispatch)=>{
// pokemonsAPI.getUrlData().then(response => {

// })
// }

export const loadMore = (url) => async(dispatch) => {
    
    pokemonsAPI.getUrlData(url).then(async response => {
        dispatch(toggleIsFetching(true))
        let pok = response.results
        let processedPok = await Promise.all(pok.map(async(p)=>{
            let pokData = await pokemonsAPI.getUrlData(p.url)
            return{...p, pokData}
        }))
        dispatch(addNewPokemons(processedPok));
        dispatch(nextPageAC(response.next))
        dispatch(toggleIsFetching(false))
})
}





export default pokemonsReduser;