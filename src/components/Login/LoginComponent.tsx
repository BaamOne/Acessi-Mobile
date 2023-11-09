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
} from "native-base";
import React, { useState } from "react";
import { Link } from "expo-router";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("Submit foi feito");
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
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input size="md" variant="underlined" placeholder="E-mail" />
          <Input size="md" variant="underlined" placeholder="Senha" />

          <Button borderRadius="full" colorScheme="blue">
            Entrar
          </Button>

          <Stack direction="column" space={3} alignItems="center">
            <Text>Esquece a senha ? </Text>
            <Link href="/RegisterUser">Cadastre-se</Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
};

export default LoginComponent;
