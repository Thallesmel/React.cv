import React from 'react'
import './Game.css'

const Game = () => {
  const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const pokemons = [
    { id:25, name: 'pikapika'},
    { id:8, name: 'wartotle'},
    { id:94, name: 'feioso'},
    { id:6, name: 'charizard'},
    { id:66, name: 'charizard'},
    { id:99, name: 'charizard'},
    { id:68, name: 'charizard'},
    { id:52, name: 'charizard'},
    { id:52, name: 'charizard'},
    { id:25, name: 'pikapika'},
    { id:8, name: 'wartotle'},
    { id:94, name: 'feioso'},
    { id:6, name: 'charizard'},
    { id:66, name: 'charizard'},
    { id:99, name: 'charizard'},
    { id:68, name: 'charizard'},

  ];
  const pairOfPokemons = [...pokemons, ...pokemons];


return (
   <div className="game">
      <div className="pokemon-cards">
      {pokemons.map((pokemon, index) => {
        let flipCard;
        flipCard = true;
        return( 
        <div className={'pokemon-card flipped'} >
          <div className="inner">
            <div className="front">
              <img 
              src={""+url+"/"+ pokemon.id +".png"}
               alt="pokemon"
                width={200}/>
            </div>
            <div className="back"></div>
          </div>
        </div>
        );
      })}
    </div>
  </div>
)};

export default Game