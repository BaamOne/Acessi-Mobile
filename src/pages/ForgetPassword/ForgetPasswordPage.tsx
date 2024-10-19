import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import ForgotPasswordComponent from "../../components/ForgotPassword/ForgotPasswordComponent";
import { ForgotPasswordPageProps } from "../../interfaces/Util/ForgotPasswordPage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const ForgetPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  navigation,
}) => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <ForgotPasswordComponent
            navigation={navigation}
          ></ForgotPasswordComponent>
        </View>
      </Box>
    </>
  );
};

export default ForgetPasswordPage;
