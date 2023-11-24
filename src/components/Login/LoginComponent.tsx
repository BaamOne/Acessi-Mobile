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

  const handleRegisterClick = () => {
    navigation.navigate("register-user");
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
        <Stack direction="column" space={4} w="100%" maxW="300">
          <Input size="md" variant="underlined" placeholder="E-mail" />
          <Input
            size="md"
            variant="underlined"
            placeholder="Senha"
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
