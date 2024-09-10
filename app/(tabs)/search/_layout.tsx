import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="search"
        options={{
          title: "Instagram",
        }}
      />
      {/* Aquí puedes añadir más pantallas dentro del stack */}
    </Stack>
  );
}