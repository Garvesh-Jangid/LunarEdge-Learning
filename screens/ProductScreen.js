import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCart } from '../context/CartContext';
import { Image } from 'react-native';

export default function ProductScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useCart();

 return (
  <View style={{ padding: 20 }}>
    <Image source={{ uri: product.image }} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
    <Text style={{ fontSize: 20, marginVertical: 10 }}>{product.title}</Text>
    <Text>{product.description}</Text>
    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>${product.price}</Text>
    <Button title="Add to Cart" onPress={() => addToCart(product)} />
  </View>
);
}
