import { View } from "react-native";
import Logo from "../components/Logo";
export { LinearGradient } from 'expo-linear-gradient'

export const Header = () => {
    return (
        <View
            // colors={['#0d9488', '#115e59', '#042f2e']}
            className={'bg-teal-900 pt-16 boder border-b-2 border-teal-700 items-end'}
        >
            <Logo />
        </View>
    )
}
