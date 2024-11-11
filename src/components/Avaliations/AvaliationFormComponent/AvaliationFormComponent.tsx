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
  Image,
  AspectRatio,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AvaliationInterface } from "../../../interfaces/Avaliation/AvaliationInterface";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { NavigationBaseAvaliation } from "../../../interfaces/Avaliation/NavigationBaseAvaliation";
import { AvaliationService } from "../../../services/Avalations/AvaliationService";
import { AvaliationItemInterface } from "../../../interfaces/Avaliation/AvaliationItemInterface";
import AlertComponent from "../../Alert/AlertComponent";
import { UserModel } from "../../../interfaces/User/UserInterface";

const AvaliationFormComponent: React.FC<NavigationBaseAvaliation> = ({
  navigation,
  route,
}) => {
  const { avaliation } = route.params;
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const avaliationService = new AvaliationService();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState<
    "success" | "error" | "info" | "warning" | ""
  >("");

  const handleRatingPress = (value: any) => {
    setRating(value);
  };

  const validateSubmit = (): boolean => {
    if (rating == 0) {
      setAlertMessage("Avaliação não pode ser enviada sem nota");
      setAlertStatus("error");
      return false;
    }

    if (description.length == 0) {
      setAlertMessage("Avaliação não pode ser enviada sem descrição");
      setAlertStatus("error");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateSubmit()) return;

    const loggedUser = localStorage.getItem("loggedUser");
    const user: UserModel = loggedUser ? JSON.parse(loggedUser) : null;

    const avaliationItem: AvaliationItemInterface = {
      avaliationGivenByUser: description,
      avaliationRating: rating,
      avaliationLocal: avaliation,
      user: user,
      dateAvaliation: new Date(),
    };

    avaliationService.CreateAvaliationItem(avaliationItem).then((status) => {
      if (!(status == 200)) {
        setAlertMessage("Problemas ao salvar a avaliação");
        setAlertStatus("error");
        return;
      }
      setAlertMessage("Availiação salva com sucesso");
      setAlertStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    });
  };

  const handleAlertClose = () => {
    setAlertMessage("");
    setAlertStatus("");
  };

  const onClose = () => {
    navigation.navigate("Avaliation");
  };

  return (
    <VStack space={4} p={5}>
      <Text fontSize="lg" fontWeight="bold" textAlign="center" flexWrap="wrap">
        Avaliar {avaliation?.name}
      </Text>

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
        onChangeText={(text) => {
          if (text.length <= 500) {
            setDescription(text);
          }
        }}
        multiline={true}
        height={150}
      />
      <Button onPress={handleSubmit} colorScheme="blue">
        Salvar Avaliação
      </Button>
      <Button onPress={onClose} colorScheme="red" variant="outline">
        Cancelar
      </Button>
      {alertMessage && (
        <AlertComponent
          message={alertMessage}
          status={alertStatus}
          onClose={handleAlertClose}
        />
      )}
    </VStack>
  );
};

export default AvaliationFormComponent;
