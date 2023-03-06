import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import Colors from "./constants/Colors";
import DetailScreen from "./screens/DetailScreen";

import HomeScreen from "./screens/HomeScreen";
import MakeBidScreen from "./screens/MakeBidScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="MakeBidScreen" component={MakeBidScreen} />
    </Stack.Navigator>
        <StatusBar style="inverted" />
      </SafeAreaProvider>
    );
  }
}
