export interface IPokemonsPayload {
  count: number;
  next: string;
  previous: string;
  results: INamedAPIResource[];
}

export interface IPokemonPayload {
  id: number;
  name: string;
  sprites: IPokemonSprites;
  types: IPokemonTypePayload[];
  stats: IPokemonStatPayload[];
  species: INamedAPIResource;
}

export interface IPokemonTypePayload {
  slot: number;
  type: INamedAPIResource;
}

export interface IPokemonStatPayload {
  stat: INamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface IPokemonSprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface INamedAPIResource {
  name: string;
  url: string;
}
