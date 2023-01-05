export interface Heroes {
  id: string;
  superhero: string;
  publisher: Tienda;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
  cantidad?:number;
}

export enum Tienda {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}


export interface Factura{

  nombreUsuario:string,
  fecha:string,
  subtotal:number,
  total:number,
  iva:number
}
