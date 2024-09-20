import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.profileImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.username}>##</Text>
          <Text style={styles.username}>Publicaciones</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.username}>##</Text>
          <Text style={styles.username}>Seguidores</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.username}>##</Text>
          <Text style={styles.username}>Seguidos</Text>
        </View>
      </View>

      <View>
        <Text>Nombre de usuario</Text>
        <Text>Descripción</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/(tabs)/profile/editprofile" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar perfil</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/profile/configuration" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ajustes</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.publicacionesContainer}>
        <Text>Publicaciones</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent:"space-between"
  },
  profileContainer: {
    flexDirection: "row", // Pone los elementos en fila
    alignItems: "center", // Alinea verticalmente en el centro
  },
  profileImage: {
    width: 80, // Ancho de la imagen
    height: 80, // Alto de la imagen
    borderRadius: 40, // Hace que la imagen sea circular
    marginRight: 20, // Espacio entre la imagen y el texto
    borderColor: "black",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center", // Centra el texto y el número horizontalmente
  },
  username: {
    alignContent: "center",
    fontSize: 13,
    fontWeight: "bold",
    margin: 4,
  },
  publicacionesContainer:{
    alignContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row", // Pone los botones en fila
    justifyContent: "space-around", // Espacio alrededor de los botones
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#2196F3", // Color del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Esquinas redondeadas
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
