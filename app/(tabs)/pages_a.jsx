import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Assurez-vous d'avoir installé react-native-vector-icons ou expo

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book a cab</Text>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Location Input */}
      <View style={styles.locationInput}>
        <View style={styles.inputWrapper}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#FFD700" />
          <TextInput
            style={styles.input}
            placeholder="1720, Sec 67, Hariyali road..."
            placeholderTextColor="#FFD700"
          />
        </View>
        <TouchableOpacity>
          <MaterialIcons name="edit-location" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Destination Input */}
      <View style={styles.destinationInput}>
        <TextInput
          style={styles.destinationTextInput}
          placeholder="Where to ?"
          placeholderTextColor="#7a7a7a"
        />
        <TouchableOpacity style={styles.plusButton}>
          <Ionicons name="ios-add" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Office</Text>
        </TouchableOpacity>
      </View>

      {/* List of Locations */}
      <ScrollView style={styles.locationList}>
        {Array(10).fill(0).map((_, index) => (
          <View key={index} style={styles.locationItem}>
            <Ionicons name="ios-time" size={24} color="#7a7a7a" />
            <View style={styles.locationInfo}>
              <Text style={styles.locationTitle}>Huda Metro Station</Text>
              <Text style={styles.locationSubtitle}>Huda city Center metro, Sec 24, Gurgaon</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    backgroundColor: '#28a745',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFCF50',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    color: '#fff',
  },
  destinationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  destinationTextInput: {
    flex: 1,
    color: '#000',
  },
  plusButton: {
    padding: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  categoryButton: {
    padding: 10,
  },
  categoryText: {
    color: '#fff',
  },
  locationList: {
    marginTop: 10,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  locationInfo: {
    marginLeft: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationSubtitle: {
    fontSize: 14,
    color: '#7a7a7a',
  },
});

export default App;
