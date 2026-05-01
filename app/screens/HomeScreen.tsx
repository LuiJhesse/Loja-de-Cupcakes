import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import HomeHeader from "../../components/HomeHeader";
import ProductCard from "../../components/ProdutoCard";
import { produtos } from "../../data/produtos";
import { theme } from "@/constants/Colors";
import Categorias from "@/components/Categorias";
import NavBar from "@/components/Navbar";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Populares hoje</Text>
      </View>


      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        style={{ maxHeight: 300 }}
        renderItem={({ item }) => (
          <ProductCard name={item.name} preco={item.preco} image={item.image} />
        )}
      />
      <View style={styles.secondSection}>
        <Text style={styles.sectionTitle}> Categorias</Text>
      </View>

      <Categorias onSelectCategory={(cat) => console.log(cat)} />

        <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEBEC",
  },

    listContainer: {
    height: 270,
    paddingHorizontal: 20,
    paddingBottom: 10,
    },

    section: {
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 15,
    },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: theme.colors.text,
  },
  secondSection: {
    marginLeft: 30,
    marginBottom: 10,
    },
});
