import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
// @ts-ignore
// eslint-disable-next-line
import Logo from "../assets/images/logo.png";
import './global.css';

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-background dark:bg-gray-900"
    >
      <Image
        source={Logo}
        className="mb-2"
        style={{ width: 200, height: 200 }}
        alt="Logo"  
      />

      
      <Text className="w-60 h-12 text-center inline-block align-middle text-textMain dark:text-textSecondary text-3xl bg-secondary rounded-lg m-2">Settings</Text>
      <Text className="w-60 h-12 text-center inline-block align-middle text-textMain dark:text-textSecondary text-3xl bg-secondary rounded-lg m-2">Stats</Text>
      <Link className="w-60 h-12 text-center inline-block align-middle text-textMain dark:text-textSecondary text-3xl bg-primary rounded-lg m-2" 
            href="/modes/Modes" >
        <Text >Play</Text>
      </Link>

    </View>
  );
}
