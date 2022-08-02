export interface Heroes {
  id: string;
  superhero: string;
  publisher: Tienda;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Tienda {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
