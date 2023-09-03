import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useAppointments from "../hooks/useAppointments";
import DoctorCard from "./DoctorCard";

interface Props {
  gameQuery: GameQuery;
}

const DataGrid = () => {
  //   const { data, error, isLoading } = useGames(gameQuery);
  const { data, error, loading } = useAppointments();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {loading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((doctor) => (
        <GameCardContainer key={doctor.id}>
          {/* <GameCard game={game} /> */}
          <DoctorCard doctor={doctor} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default DataGrid;
