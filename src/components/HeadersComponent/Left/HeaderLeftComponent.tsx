import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
import { Box, Image, Stack, Button, HStack } from "native-base";
const HeaderLeftComponent = () => {
  return (
    <>
      <Image
        source={require("../../../images/acessiLogo.png")}
        alt="Acessi+"
        size="xs"
        mx={2}
        width={110}
      />
    </>
  );
};

export default HeaderLeftComponent;
