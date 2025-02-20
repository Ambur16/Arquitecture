import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../api";
import { CharacterModel } from "~/entities/characters/models";
import { getEpisodeIds } from "./use-parse-episodes";

export const useGetCharacterById = (id: number) => {
  return useQuery({
    queryKey: ["characterById", id],
    queryFn: async () => {
      const character = await getCharacterById(id);
      const episodeIds = getEpisodeIds(character.episode);
      console.log("ssss: ",episodeIds)
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
    },
    enabled: !!id,
  });
};
