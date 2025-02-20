import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api";
import { CharacterModel } from "~/entities/characters/models";
import { getEpisodeIds } from "./use-parse-episodes";

export const useGetCharacters = (page: number) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: async () => {
      const characters = await getCharacters(page);
      return characters.map((character) => {
        const episodeIds = getEpisodeIds(character.episode);

        return new CharacterModel(
          character.id,
          character.name,
          character.status,
          character.species,
          character.type,
          character.gender,
          character.origin,
          character.location,
          character.image,
          episodeIds,
          character.url,
          character.created
        );
      });
    },
  });
};
