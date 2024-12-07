import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.appName}>Food Finds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007BFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20, 
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
