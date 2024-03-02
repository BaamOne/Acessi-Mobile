import React, { useState } from "react";
import LoginPage from "./src/pages/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterUserPage from "./src/pages/RegisterUser/RegisterUserPage";
import { NativeBaseProvider } from "native-base";
import ForgetPasswordPage from "./src/pages/ForgetPassword/ForgetPasswordPage";
import HeaderLeftComponent from "./src/components/HeadersComponent/Left/HeaderLeftComponent";
import HeaderRightComponent from "./src/components/HeadersComponent/Right/HeaderRightComponent";
import BasePage from "./src/pages/Base/BasePage";

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
            name="forget-password"
            component={ForgetPasswordPage}
            options={{
              title: "Esqueceu a senha",
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="basepage"
            component={BasePage}
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
