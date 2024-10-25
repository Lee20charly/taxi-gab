import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";


const Drive = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* */}
      {/* <Text style={styles.title}>s'Inscrire</Text> */}

      <View style={styles.row}>
        {/* <TextInput
          style={[styles.input, { width: '48%' }]}
          placeholder="Noms"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, { width: '48%' }]}
          placeholder="Prenoms"
          value={lastName}
          onChangeText={setLastName}
        /> */}
        <Image
          source={require("../../../assets/images/profile-user.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.row1}>
      <Ionicons name="search" size={20} color="#314FA3" style={styles.icon} />
      <TextInput
      
        // style={styles.input}
        placeholder="Vers où?"
        placeholderTextColor="#314FA3"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#38B763",
    padding: 20,
    borderRadius: 10,
    height: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#fff",
  },
  row1: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Drive;
