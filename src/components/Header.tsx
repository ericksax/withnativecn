import Logo from "../components/Logo";
import { LinearGradient } from 'expo-linear-gradient';

export const Header = () => {
    return (
        <LinearGradient colors={['#0d9488', '#115e59', '#042f2e']} className={`bg-teal-600 w-full items-center justify-center p-10`}>
            <Logo />
        </LinearGradient>
    )
}
