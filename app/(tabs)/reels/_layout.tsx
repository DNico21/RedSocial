import { Stack } from "expo-router";

export default function ReelsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="reels"
        options={{
          title: "Instagram",
        }}
      />
    </Stack>
  );
}
