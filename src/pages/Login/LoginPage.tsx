// src/pages/LoginPage.tsx
import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface LoginPageProps {
  navigation: any; // Replace 'any' with the appropriate type for the 'navigation' prop
}

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  return (
    <>
      <Box flex={1} bg="#fff">
        <View style={styles.container}>
          <LoginComponent navigation={navigation}></LoginComponent>
        </View>
      </Box>
    </>
  );
};

export default LoginPage;
