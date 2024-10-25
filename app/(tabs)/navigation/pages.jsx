import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TaxiApp = () => {
  return (
    <View style={styles.container}>
      <view style={styles.top}>
      <Image source={require('@/assets/images/image 5 (1).svg')} style={styles.logo_top} />
      <text> hello </text>
      </view>
      {/* Header Section with Image */}
      <View style={styles.header}>
      <Image source={require('@/assets/images/image 15.svg')} style={styles.headerImage} />
        <Text style={styles.headerText}>
          Déplacez-vous en toute sécurité quelque soit votre budget.
        </Text>
      </View>
      
      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>Muhammadiyah Malang</Text>
      </View>

      {/* Destination Input */}
      <TextInput
        style={styles.input}
        placeholder="Où va-t-on ?"
        placeholderTextColor="#888"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  top: {
    alignItems: 'center',
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor: '#0000f',
    padding: 2,
    marginBottom: 4,
    width: 100,
    height: 75,
    },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logo_top:{
    
      width:'100%',
      height: 57,
      marginBottom: 10,

  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mapPlaceholder: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default TaxiApp;
