import React, { useState } from "react";
import {
  Button,
  Heading,
  Input,
  Stack,
  Image,
  VStack,
  View,
} from "native-base";
import { UserService } from "../../services/User/UserService";
import { UserModel } from "../../interfaces/User/UserInterface";
import AlertComponent from "../AlertComponent/AlertComponent";

const RegisterUser: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const serviceUser = new UserService();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState<
    "success" | "error" | "info" | "warning" | ""
  >("");

  const handleRegister = () => {
    const user: UserModel = {
      nameUser: fullName,
      emailUser: email,
      passwordUser: password,
    };
    let erros = Validate(user);

    if (erros !== null && erros !== "") {
      setAlertMessage(erros);
      setAlertStatus("warning");
    } else {
      ///Mudar logica para enviar e-mail e confirmacao e apos confirmado criar o usuario
      serviceUser.CreateUser(user).then((res) => {
        if (res == 200) {
          setAlertMessage(
            "Enviado e-mail de confirmação para " + user.emailUser + "."
          );
          setAlertStatus("success");
        } else {
          setAlertMessage("Ocorreu algum erro ao cadastrar o usuario!");
          setAlertStatus("error");
        }
      });
      clearFields();
    }
  };

  const handleAlertClose = () => {
    setAlertMessage("");
    setAlertStatus("");
  };

  const Validate = (data: UserModel) => {
    if (!data.nameUser) {
      return "Nome é obrigatório.";
    }

    if (!data.emailUser) {
      return "E-mail é obrigatório.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.emailUser)
    ) {
      return "Endereço de e-mail inválido. Exemplo: exemplo@email.com";
    }

    if (!data.passwordUser) {
      return "Senha é obrigatória.";
    }

    if (
      data.passwordUser &&
      confirmPassword &&
      data.passwordUser !== confirmPassword
    ) {
      return "As senhas não coincidem.";
    }

    if (!confirmPassword) {
      return "Confirmação de senha é obrigatória.";
    }

    return "";
  };

  const clearFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <View>
        <VStack>
          <Image
            source={require("../../images/acessiLogo.png")}
            alt="Acessi+"
            size="md"
            width="60%"
            marginBottom="25px"
            alignSelf="center"
          />
        </VStack>
        <Stack space={4} w="100%" maxW="500px" mx="auto">
          <div>
            <Input
              size="md"
              variant="underlined"
              placeholder="Nome Completo"
              value={fullName}
              onChangeText={(value) => setFullName(value)}
              mx={12}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              mx={12}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Senha"
              type="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              mx={12}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              mx={12}
            />
          </div>
          {alertMessage && (
            <AlertComponent
              message={alertMessage}
              status={alertStatus}
              onClose={handleAlertClose}
            />
          )}
        </Stack>

        <Stack marginTop="10px">
          <VStack space={3}>
            <Button
              borderRadius="full"
              colorScheme="blue"
              onPress={handleRegister}
              mx={12}
            >
              Cadastrar
            </Button>
          </VStack>
        </Stack>
      </View>
    </>
  );
};

export default RegisterUser;
