import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

function S1() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [currentColor, setCurrentColor] = useState<string>("black");
  const colorToImageMap: { [key: string]: any } = {
    blue: require("../assets/blue.png"),
    black: require("../assets/black.png"),
    red: require("../assets/red.png"),
    silver: require("../assets/silver.png"),
  };
  //   useEffect(() => {
  //     if (route.params?.color) {
  //       console.log(route.params?.color);
  //       // chỉnh lại đường dẫn ảnh
  //     }
  //   }, [route.params?.color]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 20,
      }}
    >
      {/* <View > */}
      <Image
        source={colorToImageMap[currentColor]}
        style={styles.image}
        resizeMode="contain"
      />
      {/* </View> */}
      <Text style={styles.title}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 8,
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text style={styles.rating}>★★★★☆</Text>
          <Text style={styles.price}>1.790.000 ₫</Text>
        </View>
        <View>
          <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
          <Text style={styles.oldPrice}>1.790.000 ₫</Text>
        </View>
      </View>

      <Text style={styles.discount}>Ở đâu rẻ hơn hoàn tiền?</Text>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("s2", {
            currentColor: currentColor,
            onColorChange: (color: string) => {
              setCurrentColor(color);
            },
          });
        }}
        uppercase
        textColor="black"
        style={{ width: "100%", marginVertical: 8 }}
        icon={"arrow-right"}
        contentStyle={{ flexDirection: "row-reverse" }}
      >
        4 MÀU-CHỌN MÀU
      </Button>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    flex: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  rating: {
    fontSize: 18,
    color: "#FFD700",
  },
  reviewCount: {
    fontSize: 12,
    color: "#888",
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#FF0000",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  discount: {
    color: "#FF0000",
    marginVertical: 8,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default S1;
