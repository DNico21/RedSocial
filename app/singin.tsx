import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Singin() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Registrarse</Text>
            </View>

            {/* Contenedor para el campo de Email */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
            </View>

            {/* Contenedor para el campo de Nombre de usuario */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nombre de Usuario"
                    style={styles.input}
                />
            </View>

            {/* Contenedor para el campo de Contraseña */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>

            {/* Contenedor para el campo de confirmar Contraseña */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Confirmar Contraseña"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>

            {/* Contenedor para el botón de registrarse */}
            <View style={styles.buttonContainer}>
                <Link href={"/(tabs)/home"} asChild>
                    <Button title='Ingresar' />
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textContainer: {
        marginBottom: 30, // Espaciado antes de los campos
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    inputContainer: {
        marginVertical: 10, // Espaciado entre los campos de entrada
        width: '80%', // Ajustar el ancho de los inputs
    },
    input: {
        padding: 10,
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 20, // Espaciado antes del botón
        width: '80%', // Ajustar el ancho del botón
        height: 70
    },
});