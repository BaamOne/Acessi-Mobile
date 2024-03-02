import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import ForgetPasswordComponent from "../../components/ForgetPassword/ForgetPasswordComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const ForgetPasswordPage = () => {
  return (
    <>
      <Box flex={1} bg="#fff">
        <View style={styles.container}>
          <ForgetPasswordComponent></ForgetPasswordComponent>
        </View>
      </Box>
    </>
  );
};

export default ForgetPasswordPage;
