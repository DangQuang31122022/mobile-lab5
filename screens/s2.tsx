import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const S2: React.FC = ({ route }: any) => {
  //   const navigation: NavigationProp<ParamListBase> = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { currentColor, onColorChange } = route.params;
  const [color, setColor] = useState<string>(currentColor);
  const colorToImageMap: { [key: string]: any } = {
    blue: require("../assets/blue.png"),
    black: require("../assets/black.png"),
    red: require("../assets/red.png"),
    silver: require("../assets/silver.png"),
  };
  const handleColorChange = (color: string) => {
    setColor(color);
    onColorChange(color);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "#C4C4C4",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          gap: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 3,
            height: 140,
          }}
        >
          <Image
            source={colorToImageMap[color]}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 7,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              flexWrap: "wrap",
            }}
          >
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#C4C4C4",
          width: "100%",
          flex: 1,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới</Text>
        <View
          style={{
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            // alignContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity onPress={() => handleColorChange("silver")}>
            <View
              style={{
                backgroundColor: "#C5F1FB",
                width: 80,
                height: 80,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange("red")}>
            <View
              style={{
                backgroundColor: "red",
                width: 80,
                height: 80,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange("black")}>
            <View
              style={{
                backgroundColor: "black",
                width: 80,
                height: 80,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange("blue")}>
            <View
              style={{
                backgroundColor: "blue",
                width: 80,
                height: 80,
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained"
          style={{
            backgroundColor: "#1952E294",
            borderColor: "#CA1536",
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.popTo("s1");
          }}
        >
          Xong
        </Button>
      </View>
    </View>
  );
};
export default S2;
