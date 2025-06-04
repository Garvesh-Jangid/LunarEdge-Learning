import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function UserScreen({ navigation }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        onPress: () => logout(navigation),
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pravatar.cc/150?img=8' }} style={styles.avatar} />
      <Text style={styles.name}>Garvesh Jangid</Text>
      <Text style={styles.email}>garveshjangid@lunarEdge.com</Text>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 16, color: '#555', marginBottom: 20 },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
