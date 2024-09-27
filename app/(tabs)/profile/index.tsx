import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link, useFocusEffect } from "expo-router";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/utils/firebaseConfig";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";



export default function Profile() {
  const [posts, setPosts] = useState<string[]>([]);
  const { state } = useContext(AuthContext);
  const { firstname, lastname } = state.user || { firstname: "", lastname: "" };

  // Función para cargar los posts del usuario
  const fetchUserPosts = async () => {
    const user = auth.currentUser;
    if (user) {
      const q = query(
        collection(db, "posts"),
        where("postedBy", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const userPosts = querySnapshot.docs.map((doc) => doc.data().image);
      setPosts(userPosts);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserPosts(); // Cargar posts del usuario
    }, [])
  );

  const renderPostImage = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.postImage} />
  );

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

      <View style={styles.descrContainer}>
        <Text>
          <Text>Nombre de usuario</Text>
        </Text>
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
        <FlatList
          data={posts}
          renderItem={renderPostImage}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3} // Muestra 3 columnas
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-between",
  },

  profileContainer: {
    flexDirection: "row", // Pone los elementos en fila
    alignItems: "center",
    margin: 15, // Alinea verticalmente en el centro
  },

  descrContainer: {
    margin: 10,
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

  publicacionesContainer: {
    alignContent: "space-between",
    alignItems: "flex-start",
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

  postImage: {
    width: 131,
    height: 131, // Ajusta según tus necesidades
    margin: 0,
    aspectRatio: 1 / 1,
  },
});
