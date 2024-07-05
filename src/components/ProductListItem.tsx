import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ProductListItem = ({ product }) => {
    return (
        <View style={styles.container} key={product.id}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },

    price: {
        color: Colors.light.tint,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});