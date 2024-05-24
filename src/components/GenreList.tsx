import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props{
  onSelectedGenre:(genre:Genre) =>void;
}

const GenreList = ({onSelectedGenre}:Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return;

  return (
    <>
      {isLoading && <Spinner/>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
