import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvaliationsPage from "./AvaliationPage/AvaliationsPage";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";
import AvaliationFormPage from "./AvaliationFormPage/AvaliationFormPage";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AvaliationMainPage: React.FC<NavigationBaseProps> = ({ navigation }) => {
  return (
    <>
      <Stack.Navigator initialRouteName="Avaliation">
        <Stack.Screen
          name="Avaliation"
          component={AvaliationsPage}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="AvaliationForm"
          component={(props: any) => <AvaliationFormPage {...props} />}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default AvaliationMainPage;
