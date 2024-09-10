//search.tsx carpeta search
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      {/* Contenedor para el campo de Nombre de usuario */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'flex-start', // Alinea los elementos al inicio
    padding: 10, // Espaciado alrededor del contenedor
  },
  inputContainer: {
    width: '100%', // Ocupa todo el ancho del contenedor
    marginVertical: 10, // Espaciado entre el borde y el TextInput
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
