// src/pages/LoginPage.tsx
import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const LoginPage: React.FC<NavigationBaseProps> = ({ navigation }) => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <LoginComponent navigation={navigation}></LoginComponent>
        </View>
      </Box>
    </>
  );
};

export default LoginPage;
