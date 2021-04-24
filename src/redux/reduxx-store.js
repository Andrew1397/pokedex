import { combineReducers, createStore, applyMiddleware, } from "redux";
import pokemonsReduser from "./pokemons-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    pokemons: pokemonsReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;