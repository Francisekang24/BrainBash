import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

import { Classic } from "../../assets/assets";
import { Timed } from "../../assets/assets";
import { Endless } from "../../assets/assets";
import { Versus } from "../../assets/assets";


export default function Modes() {


    return (
        <View
            className="flex-1 items-center justify-center bg-background dark:bg-gray-900"
        >
            <Text className="mb-16 text-primary text-5xl font-bold">Game Modes</Text>

            <Link
                href='/modes/Classic'
                className="flex justify-center items-center w-60 h-20  bg-accent rounded-lg mb-1"
            >
                <View className="flex flex-row justify-center items-center w-full h-full gap-2">
                    <View className="">
                        <Image
                            source={Classic}
                            className=""
                            style={{ width: 50, height: 50 }}
                            alt="Logo"
                        />
                    </View>
                    <View className="">
                        <Text className="align-middle text-textMain dark:text-textSecondary text-3xl font-semibold">Classic</Text>
                    </View>
                </View>
            </Link>

            <Link
                href='/modes/Timed'
                className="flex justify-center items-center w-60 h-20  bg-accent rounded-lg mb-1"
            >
                <View className="flex flex-row justify-center items-center w-full h-full gap-2">
                    <View className="">
                        <Image
                            source={Timed}
                            className=""
                            style={{ width: 50, height: 50 }}
                            alt="Logo"
                        />
                    </View>
                    <View className="">
                        <Text className="align-middle text-textMain dark:text-textSecondary text-3xl font-semibold">Timed</Text>
                    </View>
                </View>
            </Link>

            <Link
                href='/modes/Endless'
                className="flex justify-center items-center w-60 h-20  bg-accent rounded-lg mb-1"
            >
                <View className="flex flex-row justify-center items-center w-full h-full gap-2">
                    <View className="">
                        <Image
                            source={Endless}
                            className=""
                            style={{ width: 50, height: 50 }}
                            alt="Logo"
                        />
                    </View>
                    <View className="">
                        <Text className="align-middle text-textMain dark:text-textSecondary text-3xl font-semibold">Endless</Text>
                    </View>
                </View>
            </Link>

            <Link
                href='/modes/Versus'
                className="flex justify-center items-center w-60 h-20  bg-accent rounded-lg"
            >
                <View className="flex flex-row justify-center items-center w-full h-full gap-2">
                    <View className="">
                        <Image
                            source={Versus}
                            className=""
                            style={{ width: 50, height: 50 }}
                            alt="Logo"
                        />
                    </View>
                    <View className="">
                        <Text className="align-middle text-textMain dark:text-textSecondary text-3xl font-semibold">Versus</Text>
                    </View>
                </View>
            </Link>
        </View>
    )
}