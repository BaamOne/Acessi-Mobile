import React, { useState } from "react";
import { Input, Button, Text, Image, Stack } from "native-base";

const ForgotPasswordComponent = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <Image
        source={require("../../images/acessiLogo.png")}
        alt="Acessi+"
        size="md"
        width="60%"
        marginBottom="25px"
        alignSelf="center"
      />

      <Stack direction="column" alignItems="center" marginBottom="15px">
        <Text>Informe o seu e-mail de cadastro para recuperar sua senha</Text>
      </Stack>

      <Stack space={4}>
        <Input size="md" variant="underlined" placeholder="E-mail" mx={12} />

        <Button borderRadius="full" colorScheme="blue" mx={12}>
          Enviar
        </Button>
      </Stack>
    </>
  );
};
export default ForgotPasswordComponent;
