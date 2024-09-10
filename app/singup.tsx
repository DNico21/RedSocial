import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link } from 'expo-router'


export default function Singup() {


    const { signUp } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Inicio de Sesion</Text>
            </View>

            {/* Contenedor para el campo de Email */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
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

            {/* Contenedor para el botón de Ingresar */}
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