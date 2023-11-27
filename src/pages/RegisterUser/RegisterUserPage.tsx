import React from "react";
import RegisterComponent from "../../components/RegisterUser/RegisterUserComponent";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });

const RegisterUserPage: React.FC = () => {
  return (
    <>
      <Box flex={1} bg="#fff" justifyContent="center">
        <View>
          <RegisterComponent />
        </View>
      </Box>
    </>
  );
};

export default RegisterUserPage;
