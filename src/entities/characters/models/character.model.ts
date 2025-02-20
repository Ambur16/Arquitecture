import { Character } from "../types/character.inteface";


export class CharacterModel implements Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string,
    public origin: { name: string; url: string },
    public location: { name: string; url: string },
    public image: string,
    public episode: string[],
    public url: string,
    public created: string
  ) {}
}
