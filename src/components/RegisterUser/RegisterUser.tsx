import React, { useState } from "react";
import { Input } from "native-base";

const RegisterUser: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Lógica para realizar o cadastro do usuário
  };

  return (
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
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default RegisterUser;
