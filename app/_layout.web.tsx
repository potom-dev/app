import { View, StyleSheet } from 'react-native';
import { CommonLayout } from './CommonLayout';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <CommonLayout storage={undefined} />
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
