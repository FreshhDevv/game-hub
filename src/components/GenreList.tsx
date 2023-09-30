import useGenres from "../hooks/useGenres";
import { List, ListItem, Image, HStack, Text } from '@chakra-ui/react'
import getCroppedImageurl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres()
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}><HStack paddingY='5px'>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageurl(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
            </HStack></ListItem>
      ))}
    </List>
  );
};

export default GenreList;
