import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
// import { BlurView } from "expo-blur";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {user} from "../data";
import Font from "../constants/Font";
import {Link} from "expo-router";

const BUTTON_SIZE = Spacing * 7;

const MakeBidScreen = (
  {
    // navigation: { goBack },
    // route: {
    //   params: { image, currency },
    // },
  }
) => {
  return (
    <>
      <Text>MakeBidScreen</Text>
      //{" "}
      <TouchableOpacity>
        // <Link href="/"> Go back</Link>
        //{" "}
      </TouchableOpacity>
    </>
  );
};

export default MakeBidScreen;
