import { Episode } from "../types/episode.interface";
import { url } from "./uris-api";

export const getEpisodesByIds = async (ids: string[]): Promise<Episode[]> => {
  const response = await fetch(url.getEpisodesByIds(ids));
  const data = await response.json();
  
  return Array.isArray(data) ? data : [data];
};
