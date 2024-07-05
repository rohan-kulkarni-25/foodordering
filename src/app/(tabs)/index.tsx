import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

export default function TabOneScreen() {
  return (
    <ScrollView style={{ backgroundColor: Colors.dark.background }}>
      {
        products.map((product) => {
          return <View style={styles.container} key={product.id}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },

  price: {
    color: Colors.light.tint

  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
});
