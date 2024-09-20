import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/dataContext";
import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <AuthProvider>
      <DataProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Inicio" }} />
          <Stack.Screen name="singin" options={{ title: "Iniciar Sesion" }} />
          <Stack.Screen name="singup" options={{ title: "Registrarse" }} />
          {/* Cuando el usuario se loggea */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </DataProvider>
    </AuthProvider>
  );
}
