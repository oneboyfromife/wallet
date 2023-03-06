import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
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
import {BlurView} from "expo-blur";

const SIZE = Spacing * 6;
const NFT_HEIGHT = Spacing * 45;
const NFT_WIDTH = Layout.window.width - Spacing * 4;

const index = () => {
  const [activeCategory, setActiveCategory] = useState(undefined);

  const [collectionList, setCollectionList] = useState([]);

  function showToast() {
    ToastAndroid.show("Akintunde, you too sabi!", ToastAndroid.SHORT);
  }

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
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text>Hello world</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button title="Show Toast" onPress={showToast} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#6638f0",
    padding: 8,
  },
});
