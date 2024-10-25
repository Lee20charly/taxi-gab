// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>; // Remplacez "any" par votre type spécifique si possible
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Image source={require("@/assets/images/image 3.png")} style={styles.logo} />
        <Image source={require("@/assets/images/image13.svg")} style={styles.img} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        <Text>Ou</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={{ color: "blue" }}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    flex: 1, // Assurez-vous que le conteneur occupe tout l'espace disponible
  },
  logo: { width: 100, height: 100 },
  img: { width: 150, height: 150 },
  div: { alignItems: "center" },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderColor: "#887E7E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#635C5C",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#38B763",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  createAccountContainer: {
    display: "flex",
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
});

export default LoginScreen;
