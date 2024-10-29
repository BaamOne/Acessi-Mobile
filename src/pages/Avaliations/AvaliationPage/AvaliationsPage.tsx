// src/pages/LoginPage.tsx
import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import AvaliationComponent from "../../../components/Avaliations/AvaliationsComponent";
import { NavigationBaseProps } from "../../../interfaces/Util/Navigation/NavigatorBase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const AvaliationFormPage: React.FC<NavigationBaseProps> = ({ navigation }) => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <AvaliationComponent navigation={navigation}></AvaliationComponent>
        </View>
      </Box>
    </>
  );
};

export default AvaliationFormPage;
