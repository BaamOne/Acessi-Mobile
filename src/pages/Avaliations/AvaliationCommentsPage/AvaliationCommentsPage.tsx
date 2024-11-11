// src/pages/LoginPage.tsx
import React from "react";
import { Box, View } from "native-base";
import { StyleSheet } from "react-native";
import AvaliationFormComponent from "../../../components/Avaliations/AvaliationFormComponent/AvaliationFormComponent";
import { NavigationBaseProps } from "../../../interfaces/Util/Navigation/NavigatorBase";
import { NavigationBaseAvaliation } from "../../../interfaces/Avaliation/NavigationBaseAvaliation";
import AvaliationCommentsComponent from "../../../components/Avaliations/AvaliationCommentsComponent/AvaliationCommentsComponent";
import { AvaliationInterface } from "../../../interfaces/Avaliation/AvaliationInterface";

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
  const { avaliation } = route.params as { avaliation: AvaliationInterface };
  console.log("AvaliationCommentsPage:", avaliation);

  return (
    <>
      <Box flex={1} bg="#F3F3F3">
        <View style={styles.container}>
          <AvaliationCommentsComponent
            locationId={avaliation.idLocalAvaliation}
          ></AvaliationCommentsComponent>
        </View>
      </Box>
    </>
  );
};

export default AvaliationCommentsPage;
