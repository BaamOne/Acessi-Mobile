// src/pages/LoginPage.tsx
import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import AvaliationFormComponent from "../../../components/Avaliations/AvaliationFormComponent/AvaliationFormComponent";
import { NavigationBaseProps } from "../../../interfaces/Util/Navigation/NavigatorBase";
import { NavigationBaseAvaliation } from "../../../interfaces/Avaliation/NavigationBaseAvaliation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const AvaliationFormPage: React.FC<NavigationBaseAvaliation> = ({
  navigation,
  route,
}) => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <AvaliationFormComponent
            navigation={navigation}
            route={route}
          ></AvaliationFormComponent>
        </View>
      </Box>
    </>
  );
};

export default AvaliationFormPage;
