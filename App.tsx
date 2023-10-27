import { Box, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/pages/Login/LoginPage";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <View style={styles.container}>
          <LoginPage />
        </View>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
