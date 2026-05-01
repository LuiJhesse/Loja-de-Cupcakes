import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/Colors";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={30}
            color={theme.colors.text}
          />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.title}>CUPCATS</Text>

          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
    <TouchableOpacity style={styles.profileButton}>
            <Ionicons
            name="person"
            size={20}
            color="#fff"
            />
      </TouchableOpacity>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Bem vindo,</Text>
        <Text style={styles.subtitle}>
          Temos doces como gatos. 🧁
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="#000"
        />

        <TextInput
          placeholder="Buscar cupcakes..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    paddingTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: 24,
    fontFamily: "Fredoka_700Bold",
    color: theme.colors.primary,
  },

  logo: {
    width: 50,
    height: 50,
  },

  welcomeContainer: {
    marginTop: 20,
    marginLeft: 10,
  },

  welcome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E1B1B",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 6,
    color: "#4A3A3A",
  },

  searchContainer: {
    marginTop: 25,
    backgroundColor: "#FFF",
    borderRadius: 25,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#999",
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  profileButton: {
  width: 38,
  height: 38,
  borderRadius: 20,
  backgroundColor: "#4A2A2A",
  justifyContent: "center",
  alignItems: "center",
},
});