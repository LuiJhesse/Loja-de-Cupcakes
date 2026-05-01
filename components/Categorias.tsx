import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { categoriasData } from "@/data/categoriasdata";


type Props = {
  onSelectCategory: (category: string | null) => void;
};

export default function Categorias({ onSelectCategory }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(id: string) {
    const newValue = selected === id ? null : id;
    setSelected(newValue);
    onSelectCategory(newValue);
  }

  return (
    <View style={styles.container}>

      <View style={styles.list}>
        {categoriasData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelect(item.id)}
            style={[
              styles.item,
              selected === item.id && styles.itemSelected,
            ]}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  list: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
  },

  itemSelected: {
    backgroundColor: "#ffd6e7",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: "#fff",
  },

  text: {
    marginTop: 6,
    fontSize: 13,
  },
});