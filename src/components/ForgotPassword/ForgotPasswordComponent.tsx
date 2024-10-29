import React, { useState } from "react";
import { Input, Button, Text, Image, Stack } from "native-base";
import AlertComponent from "../Alert/AlertComponent";
import { UserService } from "../../services/User/UserService";
import { NavigationProp } from "@react-navigation/native";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const ForgotPasswordComponent: React.FC<NavigationBaseProps> = ({
  navigation,
}) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState<
    "success" | "error" | "info" | "warning" | ""
  >("");

  const userService = new UserService();

  const handleAlertClose = () => {
    setAlertMessage("");
    setAlertStatus("");
  };

  const handleSendEmail = () => {
    if (email) {
      userService.SendEmailValidationToken(email).then((isEmailSend) => {
        if (isEmailSend) {
          setIsEmailSent(true);
          setAlertMessage(
            "Token enviado para o seu e-mail. Ele irá expirar em 5 minutos."
          );
          setAlertStatus("info");
        } else {
          setAlertMessage(
            "Problema no envio de e-mail, entre em contato com o suporte."
          );
          setAlertStatus("error");
        }
      });
    }
  };

  const handleValidateToken = () => {
    userService.ValidateToken(token, email).then((isTokenValid) => {
      if (!isTokenValid) {
        setIsTokenValid(false);
        setAlertMessage("Token inválido");
        setAlertStatus("error");
      } else {
        setIsTokenValid(true);
      }
    });
  };

  const handleResetPassword = () => {
    if (newPassword != confirmPassword) {
      setAlertMessage("Verifique se as senhas são iguais");
      setAlertStatus("warning");
    }

    userService.ChangePassword(newPassword, email).then((isPasswordChanged) => {
      if (isPasswordChanged) {
        setAlertMessage("Senha alterada com sucesso");
        setAlertStatus("success");
        navigation.navigate("login");
      } else {
        setAlertMessage("Erro ao alterar senha");
        setAlertStatus("error");
      }
    });
  };

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

      {!isEmailSent ? (
        <>
          <Stack direction="column" alignItems="center" marginBottom="15px">
            <Text>
              Informe o seu e-mail de cadastro para recuperar sua senha
            </Text>
          </Stack>

          <Stack space={4}>
            <Input
              size="md"
              variant="underlined"
              placeholder="E-mail"
              mx={12}
              value={email}
              onChangeText={setEmail} // Captura o valor do e-mail digitado
            />
            <Button
              borderRadius="full"
              colorScheme="blue"
              mx={12}
              onPress={handleSendEmail} // Função para enviar o e-mail
            >
              Confirmar
            </Button>
          </Stack>
        </>
      ) : (
        <>
          {!isEmailSent && (
            <>
              {" "}
              <Stack direction="column" alignItems="center" marginBottom="15px">
                <Text>Digite o token enviado para o seu e-mail</Text>
              </Stack>{" "}
            </>
          )}

          {!isTokenValid && (
            <>
              {" "}
              <Stack space={4}>
                <Input
                  size="md"
                  variant="underlined"
                  placeholder="Token"
                  mx={12}
                  value={token}
                  onChangeText={setToken} // Captura o valor do token digitado
                />
                <Button
                  borderRadius="full"
                  colorScheme="blue"
                  mx={12}
                  onPress={handleValidateToken} // Função para redefinir a senha
                >
                  Validar Token
                </Button>
              </Stack>{" "}
            </>
          )}

          {isTokenValid && (
            <>
              <Stack>
                <Input
                  size="md"
                  variant="underlined"
                  placeholder="Nova senha"
                  mx={12}
                  type="password"
                  value={newPassword}
                  onChangeText={setNewPassword} // Captura a nova senha digitada
                />
                <Input
                  size="md"
                  variant="underlined"
                  placeholder="Confirmar nova senha"
                  mx={12}
                  type="password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword} // Captura a confirmação da senha
                />
                <Button
                  borderRadius="full"
                  colorScheme="blue"
                  mx={12}
                  onPress={handleResetPassword} // Função para redefinir a senha
                >
                  Redefinir Senha
                </Button>
              </Stack>
            </>
          )}
        </>
      )}
      {alertMessage && (
        <AlertComponent
          message={alertMessage}
          status={alertStatus}
          onClose={handleAlertClose}
        />
      )}
    </>
  );
};

export default ForgotPasswordComponent;
