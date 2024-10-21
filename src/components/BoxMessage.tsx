import { View, Text } from "react-native"
import { Entypo } from '@expo/vector-icons'
export const BoxMessage = () => {
    return (
        <View className="bg-teal-900 border border-teal-800 rounded-xl px-4 py-2 mt-8 flex-row gap-2 items-center w-[90%] ">
            <Entypo name='info-with-circle' color='#14b8a6' size={18} />
            <Text className="text-teal-500 text-end text-sm">
                Cadastre-se hoje mesmo e tenha acesso aos fretes.
                Leia atentamente ao regulamento e embarque nessa conosco!
            </Text>
        </View >
    )
}