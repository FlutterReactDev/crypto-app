import { Box } from "@chakra-ui/react";
import { ChatIcon, HomeIcon, LinkIcon } from "@components/molecules/icons";
import { Link } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <Box
      pos={"fixed"}
      left={0}
      right={0}
      bottom={0}
      pt={6}
      pb={7}
      backdropFilter={"blur(50px)"}
      zIndex={12}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="104px"
      >
        <Link href="">
          <HomeIcon />
        </Link>
        <Link>
          <LinkIcon />
        </Link>
        <Link>
          <ChatIcon />
        </Link>
      </Box>
    </Box>
  );
};
