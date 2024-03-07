import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "native-base";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AvaliationInterface } from "../../interfaces/Avaliation/AvaliationInterface";

const AvaliationComponent = () => {
  const avaliations: AvaliationInterface[] = [
    {
      titleAvaliation: "Jaragua do sul park shopping",
      avaliationRating: 4,
      image:
        "https://poracaso.com/wp-content/uploads/2023/02/shopping_jaragua_park.jpg",
    },
    {
      titleAvaliation: "Prefeitura de Jaragua do sul",
      avaliationRating: 3,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      titleAvaliation: "Via verde",
      avaliationRating: 1,
      image:
        "https://www.jaraguadosul.sc.leg.br/wp-content/uploads/2021/07/via-verde-2.jpeg",
    },
  ];

  return (
    <>
      {avaliations.map((avaliation, index) => (
        <Box key={index} alignItems="center" maxW="80" mx="auto" mt={5}>
          <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="0.5"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            w="80" // Tamanho fixo
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: avaliation.image,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>

            <Stack p="4" space={3}>
              <Heading size="md" ml="-1" noOfLines={1}>
                {avaliation.titleAvaliation}
              </Heading>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ marginBottom: 2 }}
            >
              <HStack>
                {Array.from({ length: 5 }).map((_, index) => (
                  <MaterialCommunityIcons
                    key={index}
                    name="star"
                    size={24}
                    color={
                      index < avaliation.avaliationRating ? "gold" : "gray"
                    }
                  />
                ))}
              </HStack>
            </Stack>

            <Stack direction="row" justifyContent="space-between" space={2}>
              <Button colorScheme="blue" ml={2} mr={2} mb={2} flex={1}>
                Avaliar
              </Button>
              <Button colorScheme="blue" ml={2} mr={2} mb={2} flex={1}>
                Ver
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default AvaliationComponent;
