import { Text } from "react-native";
import { Image, Stack, Button, HStack } from "native-base";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const HomeComponent: React.FC<NavigationBaseProps> = ({ navigation }) => {
  const handlerSubmitMoreInfo = () => {
    console.log("teste more info");
    navigation.navigate("MoreInfo");
  };

  return (
    <>
      <Stack
        bg="#F3F3F3"
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
