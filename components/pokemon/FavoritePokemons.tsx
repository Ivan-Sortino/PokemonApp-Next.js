import { Grid} from '@nextui-org/react'
import { FC } from 'react'
import { FavoritePagePokemon } from '.'

interface Props{
    pokemons: number[]
}



export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
        <Grid.Container gap={2} direccion='row' justify='flex-start'>

            {
              pokemons.map( id =>(
                <FavoritePagePokemon key={id} pokemonId={id}></FavoritePagePokemon>
              ))
            }

        </Grid.Container>
  )
}



