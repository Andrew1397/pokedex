import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { pokemonsAPI } from '../../api/api';
import { setPokemons } from '../../redux/pokemons-reducer'
import Preloader from '../Preloader';
import App from '../../App.module.css';
import Characteristics from '../Charahteristics/Characteristics';

class Content extends React.Component {
    componentDidMount() {

        // pokemonsAPI.getPokemons().then(data => {
        //     this.props.setPokemons(data.results);
        // })
        this.props.setPokemons()
    }



    render() {
        

        if (!this.props.pokemons) {
            return <Preloader />
        }

        console.log('props', this.props);
        return (
            <>
                <section>
                    <span className={App.listPokemon}>
                        <div className={App.content}>
                            {
                                this.props.pokemons.map(p =>
                                    <div key={p.pokData.id} >

                                        <span className={App.listPokemons} onClick={()=>this.props.selectPokemon(p.pokData.id)}>
                                            <div className={App.content}>
                                                <div className={App.pokemon}>
                                                    <div className={App.pokemonIitem}>
                                                        <img className={App.pokemonsmalimg} src={`https://pokeres.bastionbot.org/images/pokemon/${p.pokData.id}.png`} alt="pokemon" />
                                                        <div className={App.namePokemons}>{p.name}</div>
                                                        <span className={App.typesPokemon}>
                                                        {
                                                            p.pokData.types.map(t => {
                                                                return<div key={t.type.name}>
                                                            <span className={App.typePokemon+' '+App[t.type.name]}>{t.type.name}</span>
                                                                </div>
                                                            })
                                                            }
                                                        </span>
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </span>

                                    </div>)
                            }
                            {this.props.isFetching ? <Preloader /> : null}
                            
                        </div>

                        <button onClick={() => this.props.loadMore(this.props.pokemonPage)}>
                                Load More
                        </button>
                    </span>
                    <Characteristics pokemon={this.props.pokemons.find((p)=>p.pokData.id===this.props.currentPokemon)}/>
                </section>
            </>
        )
    }

}


export default (Content);