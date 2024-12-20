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
import { StyleSheet, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AvaliationService } from "../../services/Avalations/AvaliationService";
import { useFocusEffect } from "@react-navigation/native";
import { AvaliationInterface } from "../../interfaces/Avaliation/AvaliationInterface";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const AvaliationComponent: React.FC<NavigationBaseProps> = ({ navigation }) => {
  const [avaliationFilter, setFilterAvalation] = useState<string>("");
  const [avaliations, setAvaliations] = useState<AvaliationInterface[]>([]);
  const avaliationService = new AvaliationService();
  const [hasValueSearch, setHasValueSearch] = useState<boolean>(true);

  const fetchAvaliations = async () => {
    console.log("Fetching avaliations...");
    const allAvaliations = await avaliationService.GetAllAvaliations();
    console.log("Avaliations fetched:", allAvaliations);
    setAvaliations(allAvaliations);
  };

  useEffect(() => {
    fetchAvaliations();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchAvaliations();
    }, [])
  );

  const handleSearch = () => {
    avaliationService.GetAvaliations(avaliationFilter).then((avaliation) => {
      if (avaliation.length === 0) {
        setHasValueSearch(false);
      } else {
        setHasValueSearch(true);
        setAvaliations(avaliation);
      }
    });
  };

  const handlePressAvaliation = (avaliation: AvaliationInterface) => {
    navigation.navigate("AvaliationForm", { avaliation });
  };

  const handleViewComments = (avaliation: AvaliationInterface) => {
    console.log("Viewing comments for avaliation:", avaliation);
    navigation.navigate("AvaliationComments", {
      avaliation: avaliation,
    });
  };

  if (!hasValueSearch) {
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
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Nenhuma local de avaliação encontrado
          </Text>
        </View>
      </>
    );
  }

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
        {avaliations.length === 0 ? (
          <Box w="100%" alignItems="center" mt={4}>
            <Text fontSize="lg" color="gray.500">
              Nenhum resultado encontrado.
            </Text>
          </Box>
        ) : (
          avaliations.map((avaliation, index) => (
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
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign="center"
                    flexWrap="wrap"
                  >
                    {avaliation?.name}
                  </Text>
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
                          index < Math.floor(avaliation.avaliationRating)
                            ? "gold"
                            : "gray"
                        }
                      />
                    ))}
                  </HStack>
                </Stack>

                <Stack direction="row" justifyContent="space-between" space={2}>
                  <Button
                    colorScheme="blue"
                    onPress={() => handlePressAvaliation(avaliation)}
                    ml={2}
                    mr={2}
                    mb={2}
                    flex={1}
                  >
                    Avaliar
                  </Button>
                  <Button
                    colorScheme="blue"
                    ml={2}
                    mr={2}
                    mb={2}
                    flex={1}
                    onPress={() => handleViewComments(avaliation)}
                  >
                    Ver
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#666",
  },
  highlight: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  avaliationContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  user: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    color: "#666",
    marginBottom: 8,
  },
  comment: {
    fontSize: 16,
  },
  stars: {
    flexDirection: "row",
    marginTop: 8,
  },
});

export default AvaliationComponent;
