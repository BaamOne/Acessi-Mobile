// src/pages/LoginPage.tsx
import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import AvaliationFormComponent from "../../../components/Avaliations/AvaliationFormComponent/AvaliationFormComponent";
import { NavigationBaseProps } from "../../../interfaces/Util/Navigation/NavigatorBase";
import { NavigationBaseAvaliation } from "../../../interfaces/Avaliation/NavigationBaseAvaliation";
import AvaliationCommentsComponent from "../../../components/Avaliations/AvaliationCommentsComponent/AvaliationCommentsComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const AvaliationCommentsPage: React.FC<NavigationBaseAvaliation> = ({
  navigation,
  route,
}) => {
  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <AvaliationCommentsComponent
            locationId={1}
          ></AvaliationCommentsComponent>
        </View>
      </Box>
    </>
  );
};

export default AvaliationCommentsPage;
