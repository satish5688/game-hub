import { GameQuery } from "../../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (GameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: GameQuery.genre?.id,
        platforms: GameQuery.platform?.id,
        ordering: GameQuery.shortOrder,
        search: GameQuery.searchText,
      },
    },
    [GameQuery]
  );

export default useGames;
