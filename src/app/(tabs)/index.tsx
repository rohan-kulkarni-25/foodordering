import { Image, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <ScrollView style={{ backgroundColor: Colors.dark.background }}>
      {products.map((product) => {
        return <ProductListItem product={product} />;
      })}
    </ScrollView>
  );
}



