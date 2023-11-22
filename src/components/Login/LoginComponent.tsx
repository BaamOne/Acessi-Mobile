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
} from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("Submit foi feito");
  };

  const navigation = useNavigation();

  const handleRegisterClick = () => {
    navigation.navigate("/register-user" as never);
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
          <Input
            size="md"
            variant="underlined"
            placeholder="E-mail"
            width="100%"
          />
          <Input
            size="md"
            variant="underlined"
            placeholder="Senha"
            width="100%"
            type="password"
          />

          <Button borderRadius="full" colorScheme="blue">
            Entrar
          </Button>

          <Stack direction="column" space={3} alignItems="center">
            <Text>Esquece a senha ? </Text>
            <Link onPress={handleRegisterClick}>Cadastre-se</Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
};

export default LoginComponent;
