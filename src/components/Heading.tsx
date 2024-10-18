import { Text, TextProps } from "react-native-svg"
type HeadingOneProps = TextProps & {
    title: string;
}

export const HeadingOne = ({ title, ...props }: HeadingOneProps) => {
    return (
        <Text {...props} className='text-xl'>
            {title}
        </Text>
    )
}

