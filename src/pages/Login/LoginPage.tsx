// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "../../components/Login/LoginComponent";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginPage;
