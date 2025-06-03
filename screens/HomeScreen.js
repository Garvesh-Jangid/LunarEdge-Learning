import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data));
  }, []);

 const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
    <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}>
      <Image source={{ uri: item.image }} style={{ width: 60, height: 60, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1}>{item.title}</Text>
        <Text>${item.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={products} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ padding: 15, backgroundColor: 'black' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
