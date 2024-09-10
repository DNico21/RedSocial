import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="singin" options={{ title: 'Registrate' }} />
      <Stack.Screen name="singup" options={{ title: 'Ingresa' }} />
      {/* Cuando el usuario se loggea */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}