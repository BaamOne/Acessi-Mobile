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
          <Heading size="md">
            <Image
              source={require("../../images/acessiLogo.png")}
              alt="Acessi+"
              size="xs"
              width={"100%"}
              marginBottom="20px"
            />
          </Heading>
        </VStack>
        <Stack space={4} w="100%" maxW="500px" mx="auto">
          <div>
            <Input
              size="md"
              variant="underlined"
              placeholder="Nome Completo"
              value={fullName}
              onChangeText={(value) => setFullName(value)}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Senha"
              type="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <Input
              size="md"
              variant="underlined"
              placeholder="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </div>
        </Stack>

        <Stack alignItems="center" marginTop="10px">
          <VStack space={3}>
            <Button
              borderRadius="full"
              colorScheme="blue"
              onPress={handleRegister}
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
