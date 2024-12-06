import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';
import SplashScreen from './screens/SplashScreen';
import RestaurantScreen from './screens/RestaurantScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Assign icons based on the route name
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About Us') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Restaurant') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Splash') {
              iconName = focused ? 'water' : 'water-outline';
            }

            // Return the Ionicons component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF', 
          tabBarInactiveTintColor: 'gray', 
          tabBarStyle: {
            backgroundColor: '#f5f5f5', 
            borderTopWidth: 0.5, 
            borderTopColor: '#ddd',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Us" component={AboutScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Splash" component={SplashScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
