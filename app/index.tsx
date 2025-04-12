import { Text, View, Image } from "react-native";
// @ts-ignore
// eslint-disable-next-line
import Logo from "../assets/images/logo.png";
import './global.css';

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white dark:bg-gray-900"
    >
      <Image
        source={Logo}
        className="w-48 h-48 mt-4"
        alt="Logo"  
      />
    </View>
  );
}
