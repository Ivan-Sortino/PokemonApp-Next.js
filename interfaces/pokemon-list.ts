//esta info me la dio https://quicktype.io/ metiendole la api a la pagina
export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallPokemons[];
}

export interface SmallPokemons {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
