import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemons } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';



interface Props{
  pokemons: SmallPokemons[];
}


const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start' >
        {
          pokemons.map((pokemon)=>( //hacemos con el map que nos devuelva el array con el id img y con el nombre 
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            
          ))
          
        }
            
      </Grid.Container>
   
    </Layout>
  )
}
export default HomePage;


export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); //lo que hace es decir 'mandame a traer los 151 pokemons'
  
  const pokemons: SmallPokemons[] = data.results.map( (poke, i) => ({ //hacemos q el map nos pase un nuevo array con el id que sume 1 por cada pokemon y que nos pase la imagen por  cada pokemon 
    ...poke, 
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}