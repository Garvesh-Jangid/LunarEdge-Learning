import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useCart } from '../../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart, buyNow } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#ef4444" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart Items:</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity style={styles.buyButton} onPress={buyNow}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  price: {
    color: '#555',
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: '#10b981',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
