import { Character } from "../types/character.inteface";
import { url } from "./uris-api"

export const getCharacters = async (page: number): Promise<Character[]> => {
  const response = await fetch(url.getCharacters(page));
  const data = await response.json();
  return data.results;
};