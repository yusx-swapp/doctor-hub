import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { AiOutlineLink } from "react-icons/ai";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiOutlineLink,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <a href="https://google.com">
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        </a>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
