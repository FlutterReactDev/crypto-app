import {
  Box,
  Stack,
  Text,
  Button,
  HStack,
  Image,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import ConnectWalletIcon from "../../../assets/connectWalletIcon.png";
import { Logo } from "../logo";
import { PlusIcon } from "../icons";
import { Navigation } from "../../organisms/navigation/navigation";

export const HomePage = () => {
  return (
    <Stack
      alignItems={"center"}
      w="full"
      bgColor={"#1A181B"}
      color={"white"}
      h={"100dvh"}
      minH={"775px"}
      p="15px"
      py={8}
      overflowX={"hidden"}
      pos={"relative"}
      gap={0}
    >
      <Box
        bgColor={"#09DDFA"}
        w={"300px"}
        h={"300px"}
        rounded={"full"}
        filter={"blur(100px)"}
        top={0}
        left={0}
        pos={"absolute"}
      />
      <Box
        bgColor={"#FF35B8"}
        w={"300px"}
        h={"300px"}
        rounded={"full"}
        filter={"blur(100px)"}
        bottom={0}
        right={"-20%"}
        pos={"absolute"}
      />
      <HStack
        w="full"
        direction={["row"]}
        justifyContent="space-between"
        zIndex={10}
        pl="24px"
      >
        <Logo />
        <Button
          bgColor={"#0098EA"}
          h="34px"
          fontSize="sm"
          rounded="full"
          color="#fff"
          fontWeight="600"
          _hover={{
            bgColor: "#0098EA",
          }}
          cursor="pointer"
        >
          <Image mr="2px" src={ConnectWalletIcon} alt="connect wallet" />
          Connect Wallet
        </Button>
      </HStack>

      <Stack
        width="100%"
        marginTop="18px"
        pl="24px"
        alignItems={"center"}
        direction={["row"]}
        justifyContent={"space-between"}
        zIndex={9}
      >
        <VStack align="stretch" spacing={0}>
          <Text
            color="#16f0c9"
            fontSize="xl"
            lineHeight="22px"
            fontWeight="600"
          >
            Invested in project
          </Text>
          <Box display="flex" alignItems="end" gap="5px">
            <Heading as="h2" size="2xl" lineHeight="36px" marginTop="10px">
              0.00
            </Heading>
            <Text
              as="span"
              textTransform="uppercase"
              fontSize="md"
              fontWeight="700"
              lineHeight="14px"
              color="white"
              mb="2px"
            >
              ton
            </Text>
          </Box>
        </VStack>
        <Button
          rounded="full"
          w={"61px"}
          h={"61px"}
          border={"3px solid #09DDFA"}
          color="#fff"
          backdropFilter="blur(50px)"
          boxShadow={"inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)"}
          bgColor={"transparent"}
          _hover={{ bgColor: "#09DDFA", boxShadow: "none" }}
        >
          <PlusIcon w={"26px"} h={"26px"} />
        </Button>
      </Stack>

      {/*  */}
      <Stack
        w="full"
        minH={"221px"}
        mt="35px"
        border="3px solid #09DDFA"
        borderRadius="20px"
        py="5"
        px="6"
        zIndex={6}
        pos={"relative"}
        overflow="hidden"
      >
        <Box
          bgColor={"#09DDFA"}
          w={"200px"}
          h={"200px"}
          rounded={"full"}
          filter={"blur(80px)"}
          top={"-60px"}
          left={"-20px"}
          pos={"absolute"}
        />
        <Box
          bgColor={"#FF35B8"}
          w={"200px"}
          h={"200px"}
          rounded={"full"}
          filter={"blur(80px)"}
          bottom={"-120px"}
          right={"-40px"}
          pos={"absolute"}
        />
        <Box display="flex" flexDirection="column" gap="20px" zIndex={7}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text
              fontSize={"md"}
              color={"white"}
              lineHeight={"19px"}
              fontWeight={"600"}
            >
              Deposit status:
            </Text>
            <Box
              bgColor="#38a169"
              rounded="2xl"
              h="20px"
              px="5"
              fontSize="14px"
              fontWeight="500"
              color="white"
              lineHeight="19px"
            >
              Active
            </Box>
          </Flex>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} gap={"23px"} flexDirection={"column"}>
              <Text
                color="#16f0c9"
                fontSize="md"
                fontWeight="600"
                lineHeight={"19px"}
              >
                Earned:
              </Text>
              <Box display="flex" alignItems="end">
                <Text
                  color="white"
                  fontSize="3xl"
                  fontWeight="700"
                  lineHeight="36px"
                >
                  100.23
                </Text>
                <Text
                  as="span"
                  textTransform="uppercase"
                  fontSize="md"
                  fontWeight="700"
                  lineHeight="14px"
                  ml="5px"
                  mb="5px"
                  color="white"
                >
                  ton
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} gap={"23px"} flexDirection={"column"}>
              <Text
                color="#16f0c9"
                fontSize="md"
                fontWeight="600"
                lineHeight={"19px"}
              >
                Invest:
              </Text>
              <Box display="flex" alignItems="end">
                <Text
                  color="white"
                  fontSize="3xl"
                  fontWeight="700"
                  lineHeight="36px"
                >
                  0.00
                </Text>
                <Text
                  as="span"
                  textTransform="uppercase"
                  fontSize="md"
                  fontWeight="700"
                  lineHeight="14px"
                  color="white"
                  ml="5px"
                  mb="5px"
                >
                  ton
                </Text>
              </Box>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="10px">
            <Text
              fontSize="16px"
              lineHeight="19px"
              fontWeight="600"
              color="#fff"
            >
              Day 10 of 310 days
            </Text>
            <Box
              w="full"
              h="8px"
              bgColor="#1A181B"
              rounded="full"
              position="relative"
            >
              <Box
                position="absolute"
                w="10%"
                top="0"
                left="0"
                bottom="0"
                rounded="full"
                bgColor="#16f0c9"
              ></Box>
            </Box>
          </Box>
        </Box>
      </Stack>

      {/*  */}
      <Stack
        w="full"
        mt="20px"
        borderRadius="20px"
        py="5"
        px="6"
        zIndex={7}
        bgColor="#1a181b"
        gap="20px"
      >
        <Box>
          <Text
            as="h3"
            fontSize="md"
            color={"white"}
            lineHeight="19px"
            fontWeight={"600"}
          >
            Available for withdraw
          </Text>
        </Box>
        <Box display="flex" gap={"20px"} flexDirection={"column"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              fontSize="md"
              lineHeight="19px"
              fontWeight={"600"}
              color={"#16f0c9"}
            >
              Total withdraw:
            </Text>
            <Box display="flex" alignItems="end">
              <Text
                color="white"
                fontSize="3xl"
                fontWeight="700"
                lineHeight="36px"
              >
                0.00
              </Text>
              <Text
                as="span"
                textTransform="uppercase"
                fontSize="md"
                fontWeight="700"
                lineHeight="14px"
                color="white"
                ml="5px"
                mb="6px"
              >
                ton
              </Text>
            </Box>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              fontSize="md"
              color={"white"}
              lineHeight="19px"
              fontWeight={"600"}
              h={"19px"}
            >
              DEPOSIT:
            </Text>
            <Box display="flex" alignItems="end">
              <Text
                color="#16f0c9"
                fontSize="3xl"
                fontWeight="700"
                lineHeight="36px"
              >
                0.00
              </Text>
              <Text
                as="span"
                textTransform="uppercase"
                fontSize="md"
                fontWeight="700"
                lineHeight="14px"
                color="#16f0c9"
                ml="5px"
                mb="6px"
              >
                ton
              </Text>
            </Box>
          </Flex>
        </Box>
      </Stack>

      <Box display={"flex"} alignItems={"center"} gap={"16px"} mt="5">
        <Button
          rounded={"full"}
          fontSize={"lg"}
          fontWeight={"700"}
          color={"white"}
          letterSpacing={"-0.02em"}
          h={"46px"}
          w={"147px"}
          bgColor={"#0098ea"}
          boxShadow={"0 2px 4px 0 rgba(0, 0, 0, 0.25);"}
          _hover={{
            bgColor: "#0098ea",
          }}
        >
          Withdraw
        </Button>
        <Button
          rounded={"full"}
          fontSize={"lg"}
          fontWeight={"700"}
          color={"white"}
          letterSpacing={"-0.02em"}
          h={"46px"}
          w={"147px"}
          bgColor={"#38a169"}
          boxShadow={"0 2px 4px 0 rgba(0, 0, 0, 0.25);"}
          _hover={{
            bgColor: "#38a169",
          }}
        >
          Reinvest
        </Button>
      </Box>
      <Navigation />
    </Stack>
  );
};
