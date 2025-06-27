import { View } from 'react-native';
import { CommonLayout } from './CommonLayout';

export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-background-light">
      <View className="h-ios w-ios overflow-hidden rounded-ios border-4 border-gray-300 bg-bg pb-[34px] pt-[59px]">
        <CommonLayout storage={undefined} />
      </View>
    </View>
  );
}
