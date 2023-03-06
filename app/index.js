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
import {Link} from "expo-router";

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
    <ScrollView>
      <SafeAreaView
        style={{
          marginTop: 25,
        }}
      >
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-grid"
              color={Colors.text}
              size={Spacing * 4}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.text,
              fontSize: Spacing * 2,
              fontFamily: Font.gilroyBold,
            }}
          >
            {user.name}
          </Text>
          <TouchableOpacity
            style={{
              height: SIZE,
              width: SIZE,
              overflow: "hidden",
              borderRadius: SIZE / 2,
            }}
          >
            <Image
              source={user.image}
              style={{width: "100%", height: "100%"}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: Colors.lightBackground,
            marginVertical: Spacing * 3,
          }}
        >
          <ScrollView
            style={{
              paddingVertical: Spacing * 2,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category) => (
              <TouchableOpacity
                onPress={() => setActiveCategory(category)}
                style={{
                  paddingHorizontal: Spacing * 3,
                }}
                key={category.id}
              >
                <Text
                  style={[
                    {
                      fontSize: Spacing * 2,
                      color: Colors.lightText,
                      fontFamily: Font.gilroyMedium,
                    },
                    activeCategory?.id === category.id && {
                      fontFamily: Font.gilroyBold,
                      color: Colors.darkText,
                    },
                  ]}
                >
                  {" "}
                  {category.name}{" "}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingVertical: Spacing * 4,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 2,
              color: Colors.text,
              fontFamily: Font.gilroyMedium,
            }}
          >
            {" "}
            {activeCategory?.name} collections
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.lightText,
                fontSize: Spacing * 1.6,
              }}
            >
              The week
            </Text>
            <Ionicons
              name="chevron-down"
              size={Spacing * 3}
              color={Colors.lightText}
            />
          </TouchableOpacity>
        </View>

        <View>
          {collectionList.map((collection) => (
            <View
              key={collection.id}
              style={{
                position: "relative",
                width: "100%",
                alignItems: "center",
              }}
            >
              {collection.nfts.map((nft, index) => (
                <ImageBackground
                  style={{
                    height: NFT_HEIGHT,
                    width: NFT_WIDTH,
                    position: "absolute",
                    zIndex: Spacing - index,
                    transform: [
                      {
                        translateY: index * 10,
                      },
                      {
                        scaleX: 1 - index / 10,
                      },
                    ],
                    borderRadius: Spacing * 3,
                    overflow: "hidden",
                    justifyContent: "flex-end",
                  }}
                  key={nft.id}
                  source={nft.image}
                >
                  {index === 0 && (
                    <BlurView
                      tint="dark"
                      intensity={30}
                      style={{
                        bottom: Spacing * 3,
                        marginHorizontal: Spacing * 2,
                        borderRadius: Spacing * 3,
                        overflow: "hidden",
                        padding: Spacing / 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          paddingHorizontal: Spacing,
                          paddingVertical: Spacing,
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.text,
                            fontFamily: Font.gilroyBold,
                            fontSize: Spacing * 3,
                          }}
                        >
                          {collection.name}
                        </Text>
                        <Text
                          style={{
                            color: Colors.text,
                            fontFamily: Font.gilroyLight,
                            fontSize: Spacing * 1.7,
                          }}
                        >
                          {collection.handle}
                        </Text>
                      </View>
                      <Link
                        href={{
                          pathname: "/DetailScreen",
                          // /* 1. Navigate to the details route with query params */
                          params: {collection: collection},
                        }}
                        // onPress={() =>
                        //   navigate("DetailScreen", {collection: collection})
                        // }
                        style={{
                          padding: Spacing * 2.5,
                          backgroundColor: Colors.secondary,
                          borderRadius: Spacing * 3,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: Font.gilroyBold,
                            color: Colors.text,
                            fontSize: Spacing * 1.7,
                          }}
                        >
                          View Collection
                        </Text>
                      </Link>
                    </BlurView>
                  )}
                </ImageBackground>
              ))}
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
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
