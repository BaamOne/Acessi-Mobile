import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
import { Box, Image, Stack, Button, HStack } from "native-base";
import { NavigationProp } from "@react-navigation/native";

type HomeComponentProps = {
  navigation: NavigationProp<any>;
};

const HomeComponent: React.FC<HomeComponentProps> = ({ navigation }) => {
  const handlerSubmitMoreInfo = () => {
    console.log("teste more info");
    navigation.navigate("MoreInfo");
  };

  return (
    <>
      <Stack
        bg="#fff"
        flex={1}
        justifyContent="center"
        alignItems="flex-start"
        paddingLeft={12}
      >
        <Text>
          <h1 style={{ color: "blue" }}>Bem vindo ao</h1>
        </Text>
        <Image
          source={require("../../images/acessiLogo.png")}
          alt="Acessi+"
          size="md"
          width="80%"
          marginBottom="25px"
        />
        <HStack space={4}>
          <Button colorScheme="blue"> Cadastre-se </Button>
          <Button
            variant="ghost"
            colorScheme="success"
            onPress={handlerSubmitMoreInfo}
          >
            <Text style={{ color: "blue" }}>Saiba mais</Text>
          </Button>
        </HStack>
      </Stack>
    </>
  );
};

export default HomeComponent;
