import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import UserScreen from './src/screens/UserScreen';
import { useCart } from './context/CartContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { cart } = useCart();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Search') iconName = 'search-outline';
          else if (route.name === 'User') iconName = 'person-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
       tabBarBadge: cart.length > 0 ? cart.length : undefined,
       }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{ title: 'Product Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
