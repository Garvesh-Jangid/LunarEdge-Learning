import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useCart } from '../context/CartContext';
import { Image } from 'react-native';

export default function CartScreen() {
  const { cart, removeFromCart } = useCart();

  
const renderItem = ({ item }) => (
  <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}>
    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
    <View style={{ flex: 1 }}>
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
    </View>
    <Button title="Remove" onPress={() => removeFromCart(item.id)} />
  </View>
);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Cart Items:</Text>
      <FlatList data={cart} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </View>
  );
}
