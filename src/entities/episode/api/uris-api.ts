export const url = {
  getEpisodesByIds: (idEpisodes: string[]) =>
    `https://rickandmortyapi.com/api/episode/${idEpisodes.join(",")}`,
};
