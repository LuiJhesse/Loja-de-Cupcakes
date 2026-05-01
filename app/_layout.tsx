import { Stack } from "expo-router";
import {
  useFonts,
  Fredoka_400Regular,
  Fredoka_700Bold,
  Fredoka_600SemiBold,
} from "@expo-google-fonts/fredoka";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Fredoka_400Regular,
    Fredoka_700Bold,
    Fredoka_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}