import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./Components/hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Game, Platform } from "./Components/hooks/useGames";

export interface GameQuery{
  genre:Genre|null;
  game:Game|null;
  platform:Platform|null;
}

const App = () => {
  const [GameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `" nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg:'200px 1fr'

        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre={GameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...GameQuery,genre})}/> 
          </GridItem>
        </Show>
        <GridItem area="main" >
          <PlatformSelector selectedPlatform={GameQuery.platform}  onSelectdPlatform={(platform)=>setGameQuery({...GameQuery, platform})}/>
          <GameGrid GameQuery={GameQuery}/>
          
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
