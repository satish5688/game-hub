import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCropedImageUrl from "./image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"35px"}
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
