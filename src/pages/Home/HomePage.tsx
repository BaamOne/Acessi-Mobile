import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeComponent from "../../components/Home/HomeComponent";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const HomePage = () => {
  return (
    <>
      {" "}
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeComponent}
            options={{
              tabBarIcon: () => (
                <FontAwesome5 name="house-user" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default HomePage;
