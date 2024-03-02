import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeComponent from "../../components/Home/HomeComponent";
import HomePage from "../Home/HomePage";
import SettingsComponent from "../../components/Settings/SettingsComponent";

const Tab = createBottomTabNavigator();

export default function BasePage() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={SettingsComponent} />
    </Tab.Navigator>
  );
}
