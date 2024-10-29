import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../Home/HomePage";
import SettingsPage from "../Settings/SettingsPage";
import StatisticsPage from "../Statistics/StatisticsPage";
import { Icon } from "native-base";
import React from "react";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import AvaliationMainPage from "../Avaliations/AvaliationMain";

const TabHome = createBottomTabNavigator();

export default function BasePage() {
  return (
    <TabHome.Navigator screenOptions={{ headerShown: false }}>
      <TabHome.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={Ionicons} name="home" size={30} />
          ),
          tabBarLabel: () => null, // Remove the tab label
        }}
      />
      <TabHome.Screen
        name="Statitics"
        component={AvaliationMainPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo as={Ionicons} name="star" size={30} />
          ),
          tabBarLabel: () => null, // Remove the tab label
        }}
      />
      <TabHome.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={Ionicons} name="settings" size={30} />
          ),
          tabBarLabel: () => null, // Remove the tab label
        }}
      />
    </TabHome.Navigator>
  );
}
