


const toggleFavorite = ( id: number) =>{
    
    //hacemos que favorites sea un array de numeros, va a transformar(parsear) un objeto que se encuentra en el localStorage
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]') //ahora favorites es un arreglo de lo q grabemos en el localStorage


    if(favorites.includes(id)){ //si favorites incluye el id
        favorites = favorites.filter(pokeId => pokeId !== id) // hace que favorites filtre y regrese los pokemons con diferentes id(q no se repiten)
    }else{ // pero si no lo incluye 
        favorites.push( id ) //que inserte el pokemon 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites) ) // volvemos a guardar todo y hacemos que el arreglo favorites se combierta en un string con stringify


}

const existFavorites = (id: number): boolean =>{
    if (typeof window === 'undefined') return false // poner esta linea siempre

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes( id ); 

}

const pokemons = (): number[] =>{
    return JSON.parse(localStorage.getItem('favorites') || '[]') //retorna un array de los ids de los favorites(pokemons) 
}


export default{
    toggleFavorite,
    existFavorites,
    pokemons,
}