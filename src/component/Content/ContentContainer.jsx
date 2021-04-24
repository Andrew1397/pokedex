import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPokemons, loadMore, selectPokemon } from '../../redux/pokemons-reducer';
import Content from './Content';




let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons.pokemons,
        pokemonPage: state.pokemons.next,
        isFetching: state.pokemons.isFetching,
        currentPokemon: state.pokemons.currentPokemon
    }
}

export default connect(mapStateToProps, {setPokemons,loadMore, selectPokemon}) (Content);