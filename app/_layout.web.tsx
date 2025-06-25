import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { convex } from '@/lib/convex-client';
import { Platform, SafeAreaView, View, StyleSheet } from 'react-native';
import { ConvexAuthProvider } from "@convex-dev/auth/react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const content = (
    <ConvexAuthProvider client={convex} storage={undefined}>
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

  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  phoneContainer: {
    width: 393,
    height: 852,
    borderWidth: 4,
    borderColor: 'gray',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
