export const url = {
  getCharacterById: (idCharacter: number) =>
    `https://rickandmortyapi.com/api/character/${idCharacter}`,
  getCharacters: (page: number) =>
    `https://rickandmortyapi.com/api/character/?page=${page}`,
};
