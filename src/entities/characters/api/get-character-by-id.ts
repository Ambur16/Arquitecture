import { Character } from "../types/character.inteface";
import { url } from "./uris-api"

//**No se usa aun**//
export const getCharacterById = async (id:number): Promise<Character> => {
  const response = await fetch(url.getCharacterById(id));
  const data = await response.json();
  return data.results;
};
