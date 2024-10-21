import { Form } from "../../components/Form";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native"
import { HeadingOne } from "../../components/Heading";
import { BoxMessage } from "../../components/BoxMessage";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="bg-teal-950 to-transparent items-center w-full h-full">
        <BoxMessage />
        <HeadingOne title="Login" className='mt-8' />
        <Form />
        <Text className="text-teal-200 mt-2">Não tem dastro?
          <Text className='text-teal-500'> Cadastra-se</Text>
        </Text>
      </View >
    </SafeAreaView>
  );
}

