import { useRouter } from "next/router"
import { FC } from "react"

import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemons } from "@/interfaces"




interface Props{
    pokemon: SmallPokemons
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter(); //asignamos el router 

    const onclick = () =>{ // hacemos q cuando se de un click en una tarjeta pokemon me redireccione a [id].tsx
        router.push(`/name/${pokemon.name}`); //router.push sirve para mandar el url a la pagina de pokemon, le reasignamos el [name] por cada click con el id de diferentes tarjetas 
    }


  return (
//destructuramos el pokemon con pokemon. que dentro tiene el id name img 

    <Grid  xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemon.id}> 
        <Card hoverable
              clickable 
              css={{dropShadow: "none"}}
              onClick={onclick}
            >             
            <Card.Body css={{p:1}}>
                <Card.Image
                    src={ pokemon.img }
                    width= "100%"
                    height={140}
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                </Row>
            </Card.Footer>
        </Card>
            
    </Grid>
  )
}
