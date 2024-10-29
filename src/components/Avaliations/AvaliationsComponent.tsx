import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AvaliationService } from "../../services/Avalations/AvaliationService";
import { AvaliationInterface } from "../../interfaces/Avaliation/AvaliationInterface";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const AvaliationComponent: React.FC<NavigationBaseProps> = ({ navigation }) => {
  const [avaliationFilter, setFilterAvalation] = useState<string>("");
  const [avaliations, setAvaliations] = useState<AvaliationInterface[]>([]);
  const avaliationService = new AvaliationService();

  useEffect(() => {
    const fetchAvaliations = async () => {
      const allAvaliations = await avaliationService.GetAllAvaliations();
      setAvaliations(allAvaliations);
    };
    fetchAvaliations();
  }, []);

  const handleSearch = () => {
    avaliationService.GetAvaliations(avaliationFilter).then((avaliation) => {
      setAvaliations(avaliation);
    });
  };

  const handlePressAvaliation = () => {
    navigation.navigate("AvaliationForm");
  };

  return (
    <>
      <Input
        size="md"
        variant="outline"
        placeholder="Procurar..."
        mx={12}
        mt={2}
        value={avaliationFilter}
        onChangeText={setFilterAvalation}
        InputRightElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            onPress={handleSearch}
            color="muted.400"
          />
        }
      />

      <ScrollView
        h="700px"
        maxH="700px"
        _contentContainerStyle={{ paddingBottom: 4 }}
      >
        {avaliations.map((avaliation, index) => (
          <Box
            key={index}
            alignItems="center"
            maxW="80"
            mx="auto"
            mt={5}
            display={index % 2 === 0 ? "block" : "inline-block"}
          >
            <Box
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="0.5"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              w="80"
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: avaliation.imageAvaliationLocal,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>

              <Stack p="4" space={3}>
                <Heading size="md" ml="-1" noOfLines={1}>
                  {avaliation.name}
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
                <Button
                  colorScheme="blue"
                  onPress={handlePressAvaliation}
                  ml={2}
                  mr={2}
                  mb={2}
                  flex={1}
                >
                  Avaliar
                </Button>
                <Button colorScheme="blue" ml={2} mr={2} mb={2} flex={1}>
                  Ver
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </>
  );
};

export default AvaliationComponent;
