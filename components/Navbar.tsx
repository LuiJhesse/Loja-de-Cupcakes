import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { theme } from "@/constants/Colors";

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={() => router.push("/screens/HomeScreen")}>
        <Ionicons name="home" size={26} color={theme.colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/screens/Carrinho")}>
        <Ionicons name="cart" size={26} color={theme.colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/screens/Perfil")}>
        <Ionicons name="person" size={26} color={theme.colors.primary} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",


    backgroundColor: theme.colors.secondary,
    paddingVertical: 15,
  },
});