import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { CommonLayout } from './CommonLayout';

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

/**
 * Renders the root layout of the application, providing secure storage on Android and iOS platforms.
 *
 * Passes a secure storage implementation to the layout only when running on a supported mobile platform.
 */
export default function RootLayout() {
  return (
    <CommonLayout
      storage={
        Platform.OS === "android" || Platform.OS === "ios"
          ? secureStorage
          : undefined
      }
    />
  );
}
