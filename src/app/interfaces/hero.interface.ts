export interface Hero{
    id: string;
    superhero: string;
    publisher: Publisher;
    alter_ego: string;
    first_apparance: string;
    character: string;
    alt_img?: string;

}
export enum Publisher{
    DCComics="DC Comics",
    MarvelComics="Marvel Comics",
}