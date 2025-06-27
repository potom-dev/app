import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import React from 'react';

/**
 * Displays a fallback screen for non-existent routes with a message and a link to the home screen.
 *
 * Renders a centered message indicating the screen does not exist and provides navigation back to the home route.
 */
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Text type="title">This screen does not exist.</Text>
        <Link href="/" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
