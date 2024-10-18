import { View, Text } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Input } from "./Input"
import { Button } from "./Button"

export const Form = () => {
    return (
        <View className='flex items-center justify-center w-[90%]'>
            <Input
                className='w-full mt-8'
                label='E-mail'
                placeholder='E-mail'
                inputClasses='bg-teal-950 p-4 placeholder:text-teal-600'
                labelClasses='text-teal-500 pb-2'
            />
            <Input
                className='w-full mt-8'
                label='Senha'
                placeholder='Senha'
                inputClasses='bg-teal-950 text-teal-400 p-4 placeholder:text-teal-600'
                labelClasses='text-teal-500 pb-2'
                secureTextEntry={true}
            />
            <Text className="text-teal-500 w-full text-right">Esqueceu a senha? </Text>
            <Button label='Entrar' labelClasses="text-teal-200" size={'lg'} className='bg-teal-800 w-full mt-16'></Button>
            <StatusBar style="auto" />
        </View>
    )
}