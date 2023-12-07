import React, { useState } from "react";
import LoginPage from "./src/pages/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterUserPage from "./src/pages/RegisterUser/RegisterUserPage";
import { NativeBaseProvider, Image, Text } from "native-base";
import ForgetPasswordPage from "./src/pages/ForgetPassword/ForgotPasswordPage";
import HomePage from "./src/pages/Home/HomePage";
import HeaderLeftComponent from "./src/components/HeadersComponent/Left/HeaderLeftComponent";
import HeaderRightComponent from "./src/components/HeadersComponent/Right/HeaderRightComponent";

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
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="register-user"
            component={RegisterUserPage}
            options={{
              title: "Cadastro usuário",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="forgot-password"
            component={ForgetPasswordPage}
            options={{
              title: "Esqueceu a senha",
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="home"
            component={HomePage}
            options={{
              title: "",
              headerLeft: () => <HeaderLeftComponent></HeaderLeftComponent>,
              headerRight: () => <HeaderRightComponent></HeaderRightComponent>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
