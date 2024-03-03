import { Box, View } from "native-base";
import AvaliationComponent from "../../components/Avaliations/AvaliationsComponent";
import { StyleSheet } from "react-native";

const ForgetPasswordPage = () => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View>
          <AvaliationComponent></AvaliationComponent>
        </View>
      </Box>
    </>
  );
};

export default ForgetPasswordPage;
