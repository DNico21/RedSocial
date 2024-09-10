import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import { View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Instagram",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Link href="/(tabs)/profile/editprofile" asChild>
                <TouchableOpacity style={{ marginRight: 10 }}>
                  <AntDesign name="edit" size={30} color="black" />
                </TouchableOpacity>
              </Link>

              <Link href="/(tabs)/profile/configuration" asChild>
                <TouchableOpacity>
                  <Octicons name="gear" size={24} color="black" />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
