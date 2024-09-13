//index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a Instagram</Text>

            {/* Contenedor para el botón de Iniciar Sesión */}
            <View style={styles.buttonContainer}>
                <Link href={"/singin"} asChild>
                    <Button
                        title="Iniciar Sesión"
                        color="#3897f0"
                    />
                </Link>
            </View>

            {/* Contenedor para el botón de Registrarse */}
            <View style={styles.buttonContainer}>
                <Link href={"/singup"} asChild>
                    <Button
                        title="Registrarse"
                        color="#42b72a"
                    />
                </Link>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingVertical: 40,
        backgroundColor: "#f9f9f9"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40
        
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
        height: 50,
        borderRadius: 30
    }
});
