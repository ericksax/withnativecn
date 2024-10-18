import { Form } from "../components/Form";
import { View } from "react-native";
import { Text } from "react-native"

export default function Login() {
  return (
    <View className="flex-1 h-full bg-teal-950 to-transparent items-center">
      <Form />
      <Text className="text-teal-200 mt-2">Não tem dastro? <Text className='text-teal-500'> Cadastra-se</Text></Text>
    </View >
  );
}

