import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { CommonLayout } from './CommonLayout';

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

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
