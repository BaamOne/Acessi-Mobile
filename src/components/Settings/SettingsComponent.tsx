import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
import { Box, Image, Stack, Button, HStack, VStack } from "native-base";
import { UserModel } from "../../interfaces/User/UserInterface";

const SettingsComponent: React.FC = () => {
  //ideia e pegar o usuario logado em algum momento atraves do token, por enquanto so um usuario fixo

  const user: UserModel = {
    nameUser: "Fernando Matheus Engler ",
    emailUser: "fernando.engler@gmail.com",
    passwordUser: "",
  };

  return (
    <>
      <Image
        size={30}
        borderRadius={100}
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
      />
      <HStack alignItems="center">
        <Text>{user.nameUser}</Text>
      </HStack>
    </>
  );
};

export default SettingsComponent;
