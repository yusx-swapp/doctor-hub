import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";
import useType, { Type } from "../hooks/useType";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const TypeList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useType();
  const [selectedID, setSelectedID] = useState(1);
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="xl" marginTop={9} marginBottom={3}>
        Appointment Types
      </Heading>
      <List>
        {data.map((ap_type) => (
          <ListItem key={ap_type.id} paddingY="5px">
            <HStack>
              {/* <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              /> */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={ap_type.id === selectedID ? "bold" : "normal"}
                onClick={() => setSelectedID(ap_type.id)}
                fontSize="l"
                variant="link"
                color={ap_type.id === 1 ? "red.500" : ""}
              >
                {ap_type.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TypeList;
