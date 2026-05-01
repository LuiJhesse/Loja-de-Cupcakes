import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/Colors";

type ProductCardProps = {
  name: string;
  preco: string;
  image: any;
};

export default function ProductCard({
  name,
  preco,
  image,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.infoContainer}>
  
    <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
        {name}
        </Text>

        <Text style={styles.price} numberOfLines={1}>
        Preço: {preco}
        </Text>
    </View>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons
            name="cart"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 230,
    backgroundColor: "#D98CB3",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 170,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
    textContainer: {
    flex: 1,
    marginRight: 10,
    },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E1B1B",
  },

  price: {
    marginTop: 6,
    fontSize: 15,
    color: "#3A2A2A",
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
  padding: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
});