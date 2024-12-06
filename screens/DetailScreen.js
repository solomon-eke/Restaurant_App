import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant Details</Text>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Ionicons name="restaurant-outline" size={20} color="#007BFF" style={styles.icon} />
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Food Finds!</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="star-outline" size={20} color="#FFD700" style={styles.icon} />
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>⭐⭐⭐⭐⭐</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={20} color="#FF6347" style={styles.icon} />
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Toronto</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={20} color="#32CD32" style={styles.icon} />
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>416-765-9876</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="fast-food-outline" size={20} color="#FFA500" style={styles.icon} />
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>Italian</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  detailContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 3, // Shadow for card effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginRight: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});
