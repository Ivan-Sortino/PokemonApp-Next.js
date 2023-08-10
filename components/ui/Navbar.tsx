import {Spacer, Text, useTheme, Link} from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"



export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding:'0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        
         <Image priority
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icono de imagen"
          width={70}
          height={70}
         /> 
          

        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </NextLink>
      

        <Spacer css={{flex: 1}}></Spacer>

        <NextLink href='/favorites' passHref legacyBehavior>
          <Link>
            <Text color="white"><b>Favoritos</b></Text>
          </Link>
        </NextLink>
        
          
        
        
    
    </div>
  )
}
