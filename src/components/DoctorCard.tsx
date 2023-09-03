import {
  Badge,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Appointment } from "../hooks/useAppointments";
import noImage from "../assets/no-image-placeholder.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  doctor: Appointment;
}
// {
//   /* <HStack justifyContent="space-between" marginBottom={3}>
// <CriticScore score={game.metacritic} />
// </HStack> */
// }
const DoctorCard = ({ doctor }: Props) => {
  return (
    <Card>
      <Image src={noImage} />
      <CardBody>
        <Heading fontSize="2xl" color={"pink.400"}>
          {doctor.doctor_name}
        </Heading>
        <HStack marginBottom={3}>
          <Text fontWeight="bold" color={"grey"}>
            Available Time:{" "}
          </Text>
          <Badge
            colorScheme="green"
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
          >
            {doctor.available_time}
          </Badge>
        </HStack>

        <HStack marginBottom={3} justifyContent={"space-evenly"}>
          <a href={doctor.google_map_link}>
            <Icon as={FaMapMarkerAlt} color="red.500" />
          </a>
          <Icon key={doctor.id} as={BsFillTelephoneFill} color="gray.500" />
          <Text>{doctor.phone_number}</Text>
        </HStack>
        <Center>
          <a href={doctor.appointment_website}>
            <Button colorScheme="facebook">Reserve Now</Button>
          </a>
        </Center>
      </CardBody>
    </Card>
  );
};

export default DoctorCard;
