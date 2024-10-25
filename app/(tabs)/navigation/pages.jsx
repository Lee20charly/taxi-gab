import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const TaxiAppMockup = () => {
  return (
    <View style={styles.container}>
      {/* Top Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Where to?"
        />
        <Button title="Now" onPress={() => {}} />
        <View style={styles.profileIcon}></View>
      </View>

      {/* App Logo */}
      <Text style={styles.logoText}>havleecrow</Text>

      {/* Navigation */}
      <View style={styles.navMenu}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Shop" onPress={() => {}} />
        <Button title="Office" onPress={() => {}} />
      </View>

      {/* Taxi Service Section */}
      <View style={styles.taxiSection}>
        <Image source={{ uri: 'taxi_logo_url' }} style={styles.taxiLogo} />
        <Image source={{ uri: 'driver_image_url' }} style={styles.driverImage} />
      </View>

      {/* Nature Loves Blu Section */}
      <View style={styles.natureSection}>
        <Text style={styles.natureText}>Nature loves blu!</Text>
        <Image source={{ uri: 'car_park_image_url' }} style={styles.carImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 20,
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taxiSection: {
    backgroundColor: '#f1f8e9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  taxiLogo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  driverImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  natureSection: {
    alignItems: 'center',
  },
  natureText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 10,
  },
  carImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});

export default TaxiAppMockup;
