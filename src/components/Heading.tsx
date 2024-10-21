import { Text, TextProps } from "react-native"
type HeadingOneProps = TextProps & {
    title: string;
}

export const HeadingOne = ({ title, className, ...props }: HeadingOneProps) => {
    return (
        <Text {...props} className={`text-4xl text-teal-200 text-left w-[90%] ${className}`} >
            {title}
        </Text>
    )
}

