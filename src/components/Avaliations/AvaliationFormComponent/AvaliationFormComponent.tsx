import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  HStack,
  Icon,
  Text,
  VStack,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationBaseProps } from "../../../interfaces/Util/Navigation/NavigatorBase";

const AvaliationFormComponent: React.FC<NavigationBaseProps> = ({
  navigation,
}) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleRatingPress = (value: any) => {
    setRating(value);
  };

  const handleSubmit = () => {};

  const onClose = () => {
    navigation.navigate("Avaliation");
  };

  return (
    <VStack space={4} p={5}>
      <Text fontSize="lg" fontWeight="bold">
        Avaliar Estabelecimento
      </Text>
      <HStack space={1} alignItems="center" justifyContent="center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            as={<MaterialCommunityIcons name="star" />}
            size={8}
            color={index < rating ? "gold" : "gray"}
            onPress={() => handleRatingPress(index + 1)}
            key={index}
          />
        ))}
      </HStack>
      <Input
        placeholder="Digite uma avaliação"
        value={description}
        onChangeText={setDescription}
      />
      <Button onPress={handleSubmit} colorScheme="blue">
        Salvar Avaliação
      </Button>
      <Button onPress={onClose} colorScheme="red" variant="outline">
        Cancelar
      </Button>
    </VStack>
  );
};

export default AvaliationFormComponent;
