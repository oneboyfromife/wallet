import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import {categories, collections, user} from "../data";
import Font from "../constants/Font";
import Layout from "../constants/Layout";
// import { BlurView } from "expo-blur";

const SIZE = Spacing * 6;
const NFT_HEIGHT = Spacing * 45;
const NFT_WIDTH = Layout.window.width - Spacing * 4;

const HomeScreen = ({navigation: {navigate}}) => {
  const [activeCategory, setActiveCategory] = useState(undefined);

  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    setCollectionList(
      collections.filter(
        (collection) => collection.category.id === activeCategory?.id
      )
    );
  }, [activeCategory?.id]);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, []);

  return (
    <>
      <SafeAreaView>
        <View>
          <TouchableOpacity>Running Fine!!!</TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
