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
import { UserModel } from "../../interfaces/User/UserInterface";
import { UserService } from "../../services/User/UserService";

type LoginComponentProps = {
  navigation: NavigationProp<any>;
};

const LoginComponent: React.FC<LoginComponentProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const serviceUser = new UserService();

  const user: UserModel = {
    emailUser: email,
    passwordUser: password,
  };

  const handleRegisterUserClick = () => {
    navigation.navigate("register-user");
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate("forgot-password");
  };

  const handleSubmitButton = () => {
    console.log(email);
    console.log(password);
    serviceUser.LoginUser(user).then((res) => {
      if (res.status == 200) {
        navigation.navigate("home");
      } else {
        //Criar compontent de alerta
        alert("Usuário ou senha inválidos");
      }
    });
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
          <Input
            size="md"
            variant="underlined"
            placeholder="E-mail"
            mx={12}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            size="md"
            variant="underlined"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
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
