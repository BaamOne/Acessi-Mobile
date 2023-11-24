import React, { useState } from "react";
import LoginPage from "./src/pages/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterUserPage from "./src/pages/RegisterUser/RegisterUserPage";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={LoginPage}
            options={{
              title: "Acessi+",
              headerTitleAlign: "center", // Centraliza o título
            }}
          />
          <Stack.Screen
            name="register-user"
            component={RegisterUserPage}
            options={{
              title: "Cadastro usuário",
              headerTitleAlign: "center", // Centraliza o título
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
