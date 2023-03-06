import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {index} from "./index";

export default function HomeLayout() {
  const [fontsLoaded] = useFonts({
    "gilroy-bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "gilroy-light": require("../assets/fonts/Gilroy-Light.ttf"),
    "gilroy-medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "gilroy-regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  } else {
    // Render the children routes now that all the assets are loaded.

    return (
      <SafeAreaProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style="inverted" />
      </SafeAreaProvider>
    );
  }
}
