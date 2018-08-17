import { createStackNavigator } from "react-navigation";
import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";

/**
 * @description Initializing the stack navigator.
 */

export default (App = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    SecondScreen: { screen: SecondScreen }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: "#02ADAD" },
      headerTitleStyle: {
        color: "white",
        flex: 1,
        textAlign: "center",
        fontSize: 16
      },
     headerTintColor: "white"
    }
  }
));
