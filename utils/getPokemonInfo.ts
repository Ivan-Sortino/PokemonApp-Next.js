import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";


export const getPokemonInfo = async (nameOrId:string) =>{
    
  
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); // hacemos la peticion a pokeApi  y recibimos el name
  
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}