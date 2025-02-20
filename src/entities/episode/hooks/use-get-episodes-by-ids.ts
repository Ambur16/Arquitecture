import { useQuery } from "@tanstack/react-query";
import { getEpisodesByIds } from "../api";
import { EpisodeModel } from "../models";

interface UseGetEpisodesByIdsProps {
  ids: string[];
  enabled: boolean;
}

export const useGetEpisodesByIds = ({
  ids,
  enabled,
}: UseGetEpisodesByIdsProps) => {
  return useQuery({
    queryKey: ["episodesByIds", ids],
    queryFn: async () => {
      const episodes = await getEpisodesByIds(ids);
      return episodes.map(
        (episode) =>
          new EpisodeModel(
            episode.id,
            episode.name,
            episode.air_date,
            episode.episode,
            episode.characters,
            episode.url,
            episode.created
          )
      );
    },
    enabled,
  });
};
