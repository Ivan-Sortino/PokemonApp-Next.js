import { FC, PropsWithChildren } from 'react';

import Head from "next/head";
import { Navbar } from '../ui';

interface Props extends PropsWithChildren{
    title?: string;
}

export const Layout: FC<Props> = ( {children, title} ) => {
  return (
    <>
    <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Ivan Sortino" />
        <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`}/> 
    </Head>

    <Navbar></Navbar>

    <main style={{
        padding: '0px 20px'
    }}>
        { children }
    </main>
    </>
  )
}
