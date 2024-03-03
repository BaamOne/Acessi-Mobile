import * as React from "react";
import HomeComponent from "../../components/Home/HomeComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreInfoComponent from "../../components/MoreInfo/MoreInfoComponent";
import MoreInfoPage from "../MoreInfo/MoreInfoPage";

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
        component={MoreInfoPage}
      />
    </HomeStack.Navigator>
  );
}

export default HomePage;
