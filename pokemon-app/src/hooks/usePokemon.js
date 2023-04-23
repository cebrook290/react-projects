import {useState} from 'react'
import { IndexedPokemon } from '../Interfaces/pokemon.interface'
import { POKE_URL } from '../API/apiList'

const usePokemon = () => {
    const [pokemon, setPokemon] = useState([]) 
    const [nextURL, setNextURL] = useState(POKE_URL)

    return {
        pokemon
    }
}