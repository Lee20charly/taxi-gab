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

      {/* Location Inputs */}
      <View style={styles.locationInput}>
        <View style={styles.inputWrapper}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#FFD700" />
          <TextInput
            style={styles.input}
            placeholder="1720, Sec 67, Hariyali road..."
            placeholderTextColor="#FFD700"
          />
        </View>
      </View>

      <View style={styles.locationInput}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="location-on" size={20} color="#FF0000" />
          <TextInput
            style={styles.input}
            placeholder="Ambience Mall, DLF Phase 3..."
            placeholderTextColor="#FF0000"
          />
          <TouchableOpacity>
            <Ionicons name="ios-add" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.locationInput}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="location-on" size={20} color="#00FF00" />
          <TextInput
            style={styles.input}
            placeholder="Huda city Center metro..."
            placeholderTextColor="#00FF00"
          />
        </View>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      {/* Map and Nearby Cabs */}
      <View style={styles.mapContainer}>
        <View style={styles.mapHeader}>
          <Text>Myself</Text>
          <Text>120</Text>
        </View>
        <View style={styles.map}>
          {/* Replace this with a Map component like react-native-maps */}
          <Text style={styles.mapPlaceholder}>[Map Placeholder]</Text>
          <TouchableOpacity style={styles.getCabButton}>
            <Text style={styles.getCabButtonText}>Get a cab in 5 min</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* List of Cabs */}
      <ScrollView style={styles.cabList}>
        {Array(4).fill(0).map((_, index) => (
          <View key={index} style={styles.cabItem}>
            <Image source={require('@/assets/images/image 1.svg')} style={styles.cabImage} />
            <View style={styles.cabInfo}>
              <Text style={styles.cabModel}>MG ZS EV</Text>
              <Text style={styles.cabLicense}>DL09 EV9897</Text>
              <Text style={styles.cabCo2}>208 kg CO2 Saved</Text>
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
  doneButton: {
    backgroundColor: '#28a745',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapContainer: {
    marginVertical: 20,
  },
  mapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  map: {
    backgroundColor: '#e0e0e0',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    color: '#aaa',
  },
  getCabButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  getCabButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cabList: {
    marginTop: 10,
  },
  cabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  cabImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  cabInfo: {
    marginLeft: 10,
  },
  cabModel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cabLicense: {
    fontSize: 14,
    color: '#7a7a7a',
  },
  cabCo2: {
    fontSize: 14,
    color: '#00FF00',
  },
});

export default App;
