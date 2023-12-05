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

const RegisterUser: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const serviceUser = new UserService();

  const handleRegister = () => {
    console.log(`entrou confirmacao`);

    const user: UserModel = {
      nameUser: fullName,
      emailUser: email,
      passwordUser: password,
    };
    let erros = Validate(user, confirmPassword);

    if (erros !== null) {
      //Criar componente para exibir mensagem conforme parametro
      console.log(erros);
    } else {
      //serviceUser.CreateUser(user);
      //Enviar email de confirmacao apoos isso
      //Criar componente para exibir mensagem conforme parametro
      console.log(`Funcionando`);
    }
  };

  const Validate = (data: UserModel, confirmPassword: string) => {
    let erros: any = {};
    if (!data.nameUser) {
      erros.name = "Nome é obrigatório.";
    }

    if (!data.emailUser) {
      erros.email = "E-mail é obrigatório.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.emailUser)
    ) {
      erros.email = "Endereço de e-mail inválido. Exemplo: exemplo@email.com";
    }

    if (!data.passwordUser) {
      erros.password = "Senha é obrigatória.";
    }

    if (
      data.passwordUser &&
      confirmPassword &&
      data.passwordUser !== confirmPassword
    ) {
      erros.confirmationPassword = "As senhas não coincidem.";
    }

    if (!confirmPassword) {
      erros.confirmationPassword = "Confirmação de senha é obrigatória.";
    }

    return erros;
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
