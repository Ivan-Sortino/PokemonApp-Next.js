import { Card, Grid, Row, Text } from "@nextui-org/react"

import { FC } from "react"

import { SmallPokemons } from "@/interfaces"



interface Props{
    pokemon: SmallPokemons
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  return (
//destructuramos el pokemon con pokemon. que dentro tiene el id name img 

    <Grid  xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemon.id}> 
        <Card hoverable clickable css={{dropShadow: "none"}}>
            <Card.Body css={{p:1}}>
                <Card.Image
                    src={ pokemon.img }
                    width="100%"
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
