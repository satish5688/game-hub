import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCropedImageUrl from "./image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 4, 5, 6, 7, 8, 3, 9, 10];

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"35px"}
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            ></Image>
            <Button
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              fontSize={"large"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
