import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";

import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";

const BUTTON_SIZE = Spacing * 7;
const IMAGE_HEIGHT = Layout.window.height / 1.4;

const DetailScreen  = ({
  navigation: { goBack, navigate },
  route,
}) => {
  const collection = route.params.collection;

  return (
    <>
      <Text>DetailScreen</Text>
    </>
  );
};

export default DetailScreen;
