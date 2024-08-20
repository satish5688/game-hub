import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./Components/hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Game, Platform } from "./Components/hooks/useGames";
import ShortSelector from "./Components/ShortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  game: Game | null;
  platform: Platform | null;
  shortOrder: string;
  searchText: string;
}

const App = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `" nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...GameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={GameQuery}></GameHeading>
            <Flex >
              <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={GameQuery.platform}
                onSelectdPlatform={(platform) =>
                  setGameQuery({ ...GameQuery, platform })
                }
                
              /></Box>
              <ShortSelector
                shortOrder={GameQuery.shortOrder}
                onSelectShort={(shortOrder) =>
                  setGameQuery({ ...GameQuery, shortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid GameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
