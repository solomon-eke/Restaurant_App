import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const API_URL = 'https://api.yelp.com/v3/businesses/search';
const API_KEY = 'n_NITanWK5l9IOe2HO5sln46OdCLf03plTlWudLAyMi_HKBqtQKi5q9GhBBnLbOwYfbxtjexNTBPMSCVRpCJZUS48LsJ7wACnztHM48VLl9fsFDW19neLKgRe89HZ3Yx'; 

const RestaurantScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?location=Toronto&term=restaurants`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const json = await response.json();
        setRestaurants(json.businesses || []);
        setFilteredRestaurants(json.businesses || []);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleFilter = () => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const renderRestaurant = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemInfo}>
        Rating: {item.rating} | Reviews: {item.review_count}
      </Text>
      <Text style={styles.itemInfo}>{item.location.address1}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant List</Text>
      <TextInput
        style={styles.input}
        placeholder="Search restaurants"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleFilter} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={renderRestaurant}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemInfo: {
    fontSize: 14,
    color: '#555',
  },
});

export default RestaurantScreen;
