import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.body}>
          Welcome to <Text style={styles.highlight}>Food Finds</Text>, your go-to app for discovering amazing restaurants near you! 
          Powered by the Yelp API, our app allows you to explore diverse dining options with detailed business information. 
          Whether you're searching for local favorites or hidden gems, we've got you covered.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', 
  },
  contentContainer: {
    backgroundColor: '#fff', // White background for the content card
    borderRadius: 8,
    padding: 16,
    elevation: 3, // Shadow for card effect (Android)
    shadowColor: '#000', // Shadow for card effect (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', 
    textAlign: 'justify',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
