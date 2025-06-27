import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { convex } from '@/lib/convex-client';
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { SpaceGrotesk_400Regular, SpaceGrotesk_500Medium, SpaceGrotesk_600SemiBold, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import { SafeAreaView } from 'react-native';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

type ConvexAuthStore = {
  getItem(key: string): string | null | Promise<string | null>;
  setItem(key: string, value: string): void | Promise<void>;
  removeItem(key: string): void | Promise<void>;
};

export function CommonLayout({ storage }: { storage?: ConvexAuthStore }) {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Martian Grotesk': require('../assets/fonts/MartianGrotesk-VFVF.ttf'),
    'Space Grotesk': SpaceGrotesk_400Regular,
    'Space Grotesk Medium': SpaceGrotesk_500Medium,
    'Space Grotesk SemiBold': SpaceGrotesk_600SemiBold,
    'Space Grotesk Bold': SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ConvexAuthProvider client={convex} storage={storage}>
      <GluestackUIProvider mode="light">
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'var(--color-bg-rgb)' }
              }}
            >
              <Stack.Screen name="(auth)" options={{
                headerShown: true,
                contentStyle: { backgroundColor: 'red' },
                headerStyle: { backgroundColor: 'blue' },
                headerTintColor: 'white',
                headerTitle: 'Login',
                headerTitleStyle: { color: 'white' },
                headerBackTitle: 'Back',
                headerBackTitleStyle: { color: 'white' },
                headerBackTitleVisible: true,
              }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaView>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GluestackUIProvider>
    </ConvexAuthProvider>
  );
}