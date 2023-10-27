import {
  Box,
  Center,
  FormControl,
  Icon,
  Input,
  Stack,
  View,
  Image,
} from "native-base";
import React, { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = () => {
    console.log("Submit foi feito");
  };

  return (
    <Box w="100%">
      <Center>
        <Image
          source={require("../../images/acessiLogo.png")}
          alt="Acessi+"
          size="xs"
          width={"100%"}
          marginBottom="20px"
        />
      </Center>

      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            shadow={2}
            type="text"
            w="100%"
            placeholder="Informe seu e-mail"
          />
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            shadow={2}
            type="password"
            w="100%"
            placeholder="Informe sua senha"
          />
        </Stack>
      </FormControl>
    </Box>
  );
};

export default LoginComponent;
