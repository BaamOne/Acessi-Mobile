import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeComponent from "../../components/Home/HomeComponent";
import { FontAwesome5 } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreInfoComponent from "../../components/MoreInfo/MoreInfoComponent";
import MoreInfoPage from "../MoreInfo/MoreInfoPage";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

function HomePage() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeComponent}
      />
      <HomeStack.Screen
        name="MoreInfo"
        options={{
          title: "",
          headerShown: false,
        }}
        component={MoreInfoComponent}
      />
    </HomeStack.Navigator>
  );
}

export default HomePage;
