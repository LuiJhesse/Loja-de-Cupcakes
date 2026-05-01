import { View, TouchableOpacity,Text, Image, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { theme } from "@/constants/Colors";

export default function Header(){

    return(
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
                

            </View>

    )
};

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

  profileButton: {
  width: 38,
  height: 38,
  borderRadius: 20,
  backgroundColor: "#4A2A2A",
  justifyContent: "center",
  alignItems: "center",
},
});