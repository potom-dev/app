import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SecureStore from 'expo-secure-store';
import { convex } from '@/lib/convex-client';
import { Platform, SafeAreaView } from 'react-native';
import { ConvexAuthProvider } from "@convex-dev/auth/react";

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ConvexAuthProvider client={convex}
      storage={
        Platform.OS === "android" || Platform.OS === "ios"
          ? secureStorage
          : undefined
      }>
      <GluestackUIProvider mode="light">
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaView>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GluestackUIProvider>
    </ConvexAuthProvider>
  );
}
