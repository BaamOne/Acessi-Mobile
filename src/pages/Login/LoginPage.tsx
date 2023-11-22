// src/pages/LoginPage.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "../../components/Login/LoginComponent";
import RegisterUser from "../../components/RegisterUser/RegisterUser";

const Stack = createStackNavigator();

const LoginPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginComponent} />
        <Stack.Screen name="register-user" component={RegisterUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginPage;
