import { Text, View } from "react-native";
import './global.css';

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Text className="text-blue-500 text-4xl">BrainBash</Text>
    </View>
  );
}
