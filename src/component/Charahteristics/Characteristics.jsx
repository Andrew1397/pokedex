import React from 'react'
import App from '../../App.module.css'

const Characteristics = ({pokemon}) => {
    console.log('Pokemon',pokemon);
  let nameCh = (name) => {
    return pokemon.pokData.stats.filter((s)=>s.stat.name===name)[0].base_stat
}
  const UpFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
    return (
        <span>
            
        
          <div className={App.pokemonCharacteristics}>
            <div className={App.pokemonCharacteristicsItems}>
              <img className={App.pokemonImgCharacteristic} src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokData.id}.png`} alt="" />
              <div className={App.namePokemonsandID}>{UpFirst(pokemon.name)}</div>
              <table border={1} width="100%">
                <tbody><tr>
                    <td>Type</td>
                    <td>
                    {
                    pokemon.pokData.types.map(t => {
                        return<div key={t.type.name}>
                    {t.type.name}
                        </div>
                    })
                    }
                    </td>
                     
                  </tr>
                  <tr>
                    <td>Attack</td>
                    <td>{nameCh('attack')}</td>
                  </tr>
                  <tr>
                    <td>Defense</td>
                    <td>{nameCh('defense')}</td>
                  </tr>
                  <tr>
                    <td>HP</td>
                    <td>{nameCh('hp')}</td>
                  </tr>
                  <tr>
                    <td>SP Attack</td>
                    <td>{nameCh('special-attack')}</td>
                  </tr>
                  <tr>
                    <td>SP Defense</td>
                    <td>{nameCh('special-defense')}</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>{nameCh('speed')}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{pokemon.pokData.weight}</td>
                  </tr>
                  <tr>
                    <td>Total moves</td>
                    <td>{pokemon.pokData.moves.length}</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </span>
    )
}

export default Characteristics