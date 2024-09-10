import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Imagen de perfil */}
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // URL de la imagen de perfil
          style={styles.profileImage}
        />

        {/* Nombre de usuario */}
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
          <Text style={styles.username}>Seguidos </Text>
        </View>
      </View>
      <View>
        <Text>Nombre de usuario</Text>
        <Text>Descripción</Text>
      </View>
      <View style={styles.publicacionesContainer}>
        <Text>Publiaciones</Text>
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
});
