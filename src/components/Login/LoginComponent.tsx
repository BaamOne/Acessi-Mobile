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

import { NavigationProp, StackActions } from "@react-navigation/native";
import { UserModel } from "../../interfaces/User/UserInterface";
import { UserService } from "../../services/User/UserService";
import AlertComponent from "../AlertComponent/AlertComponent";
import { CommonActions } from "@react-navigation/native";

type LoginComponentProps = {
  navigation: NavigationProp<any>;
};

const LoginComponent: React.FC<LoginComponentProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState<
    "success" | "error" | "info" | "warning" | ""
  >("");
  const serviceUser = new UserService();

  const user: UserModel = {
    emailUser: email,
    passwordUser: password,
  };

  const handleSubmitButton = () => {
    if (user.emailUser == "" || user.passwordUser == "") {
      setAlertMessage("Os campos de usuario e senha sao obrigatorios");
      setAlertStatus("warning");
      return;
    }

    serviceUser.LoginUser(user).then((res) => {
      if (res == 200 || 1 == 1) {
        const replaceAction = StackActions.replace("basepage", {});

        navigation.dispatch(replaceAction);
      } else {
        //Criar compontent de alerta
        setAlertMessage("Usuário ou senha inválidos");
        setAlertStatus("warning");
      }
    });
  };

  const handleRegisterUserClick = () => {
    navigation.navigate("register-user");
  };
  const handleAlertClose = () => {
    setAlertMessage("");
    setAlertStatus("");
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate("forget-password");
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
            type={"password"}
            mx={12}
          />

          {alertMessage && (
            <AlertComponent
              message={alertMessage}
              status={alertStatus}
              onClose={handleAlertClose}
            />
          )}

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
