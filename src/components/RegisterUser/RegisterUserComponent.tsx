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

const RegisterUser: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Lógica para realizar o cadastro do usuário
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
