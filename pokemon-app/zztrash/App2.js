import React, {useState} from 'react'
import PokeList from './PokeList'
import axios from 'axios';

function App2() {
    const [pokemon, setPokemon] = useState([])

    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
        setPokemon(res.data.results.map(p=> [p.name, p.id]))
    })
  
  
    return (
       <PokeList pokemon={pokemon} />
    );
}

export default App2
