import {
  HStack,
  View,
  Text,
  VStack,
  Heading,
  Image,
  Stack,
  Input,
  Center,
  Button,
  Link,
  Divider,
} from "native-base";
import React, { useState } from "react";

import { NavigationProp } from "@react-navigation/native";

type LoginComponentProps = {
  navigation: NavigationProp<any>;
};

const LoginComponent: React.FC<LoginComponentProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("Submit foi feito");
  };

  const handleRegisterUserClick = () => {
    navigation.navigate("register-user");
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate("forgot-password");
  };

  const handleSubmitButton = () => {
    navigation.navigate("home");
  };

  return (
    <>
      <View>
        <Image
          source={require("../../images/acessiLogo.png")}
          alt="Acessi+"
          size="md"
          width="60%"
          marginBottom="25px"
          alignSelf="center"
        />
        <Stack direction="column" space={4}>
          <Input size="md" variant="underlined" placeholder="E-mail" mx={12} />
          <Input
            size="md"
            variant="underlined"
            placeholder="Senha"
            type="password"
            mx={12}
          />

          <Button
            borderRadius="full"
            colorScheme="blue"
            mx={12}
            onPress={handleSubmitButton}
          >
            Entrar
          </Button>

          <Stack direction="column" space={3} alignItems="center">
            <Link onPress={handleForgotPasswordClick}>Esqueceu a senha ?</Link>
            <Link onPress={handleRegisterUserClick}>Cadastre-se</Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
};

export default LoginComponent;
