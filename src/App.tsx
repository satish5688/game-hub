import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./Components/hooks/useGenres";

const App = () => {
  const [selectedGenre,setSelectedGener]=useState<Genre| null>(null)

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
            <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre)=>setSelectedGener(genre)}/> 
          </GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid selectedGenre={selectedGenre}/>
          
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
