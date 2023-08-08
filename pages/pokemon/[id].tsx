
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextPage } from 'next';

import { pokeApi } from '@/api';
import { Layout } from "@/components/layouts"
import { Pokemon } from '@/interfaces';

import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';






interface Props{
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  // console.log(pokemon)
  
  
    return (
      //aca va todas la informacion de los pokemons 
      <Layout>
        <Grid.Container css={{marginTop: '5px'}} gap={ 2 } >
          <Grid xs={ 12 } sm={ 4 }>
            <Card hoverable css={{ padding: '30px'}}>
              <Card.Body>
                <Card.Image
                  src={pokemon.sprites.other?.dream_world.front_default || '/image.png'}
                  alt={pokemon.name}
                  width='100%'
                  height={200}
                  />
              </Card.Body>

            </Card>
          </Grid>

            <Grid xs={ 12 } sm={ 8 }>
              <Card>
                <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                  <Text h1 transform='capitalize'>{pokemon.name}</Text>
                  <Button
                  color="gradient"
                  ghost
                  >
                    Guardar en favoritos
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Text size={30}>Sprites:</Text>
                  <Container direction='row' display='flex' gap={0}>
                    <Image 
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                    />
                    <Image
                      src={pokemon.sprites.back_default}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                    />
                    <Image
                      src={pokemon.sprites.front_shiny}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                    />
                    <Image
                      src={pokemon.sprites.back_shiny}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                    />
                  </Container>
                </Card.Body>
              </Card>
            </Grid>

        </Grid.Container>
      </Layout>
    
  )
}





export const getStaticPaths: GetStaticPaths = async (ctx) => { // Lo uso para el contenido dinamico por el archivo [id]

  const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}` ); //destructuramos un array que tenga (151 lugares), lo barremos con un map, tomomas el value q es un null
                                                                              //el index es la posicion indice de cada iteracion y nos regresa el index + 1 
  
 

  return {
    paths: pokemons151.map(id =>({
      params: { id }
    })),
      
    
    
    fallback: false //le pongo false porque si la pagina no esta en algun id ponga error 404
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => { //del ctx destructuramos el params
  
  
  const { id } = params as {id: string} // destructuramos del params el id y le decimos q el id es string
  
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`); // data son todas las caraceteristicas de pokemon
  
  return {
    props: {
      pokemon: data
    }
  }

 }




export default PokemonPage