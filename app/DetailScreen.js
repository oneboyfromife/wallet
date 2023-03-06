import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import {Ionicons} from "@expo/vector-icons";
// import { BlurView } from "expo-blur";

import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import {Link} from "expo-router";

const BUTTON_SIZE = Spacing * 7;
const IMAGE_HEIGHT = Layout.window.height / 1.4;

const DetailScreen = () => {
  // const collection = route.params.collection;

  return (
    <>
      <Text>DetailScreen</Text>
      //{" "}
      <TouchableOpacity>
        // <Link href="/"> Go back</Link>
        //{" "}
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/MakeBidScreen"> Make Bid</Link>
      </TouchableOpacity>
    </>
  );
};

export default DetailScreen;
