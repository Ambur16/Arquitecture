import { Episode } from "../types/episode.interface";

export class EpisodeModel implements Episode {
  constructor(
    public id: number,
    public name: string,
    public air_date: string,
    public episode: string,
    public characters: string[],
    public url: string,
    public created: string
  ) {}
}
