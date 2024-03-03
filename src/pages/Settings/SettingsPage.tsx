import HomeComponent from "../../components/Home/HomeComponent";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SettingStack = createNativeStackNavigator();

function SettingsPage() {
  return (
    <>
      {" "}
      <SettingsComponent></SettingsComponent>{" "}
    </>
  );
}

export default SettingsPage;
