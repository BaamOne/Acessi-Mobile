import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import ForgotPasswordComponent from "../../components/ForgetPassword/ForgotPasswordComponent";

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
          <ForgotPasswordComponent></ForgotPasswordComponent>
        </View>
      </Box>
    </>
  );
};

export default ForgetPasswordPage;
