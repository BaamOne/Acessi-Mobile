import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeComponent from "../../components/Home/HomeComponent";
import { FontAwesome5 } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreInfoComponent from "../../components/MoreInfo/MoreInfoComponent";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MoreInfoPage = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="MoreInfo">
        <Stack.Screen
          name="MoreInfo"
          component={MoreInfoComponent}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default MoreInfoPage;
