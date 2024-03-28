import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    title: string,
    onPress: () => void,
    buttonStyle?: ViewStyle,
    gradientColors?: string[],
    fontSize?: number
}

export function CustomButton({ title, onPress, buttonStyle, gradientColors, fontSize = 18 }: Props) {
    const colors = gradientColors && gradientColors.length > 1
        ? gradientColors
        : Array(2).fill(buttonStyle?.backgroundColor || styles.buttonBase.backgroundColor)
    const {
        borderRadius,
        borderTopRightRadius,
        borderTopLeftRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius
    } = buttonStyle || {
        borderRadius: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    };

    return <View style={[styles.buttonBase, buttonStyle]}>
        <TouchableHighlight onPress={onPress} style={{
            width: '100%',
            justifyContent: 'center',
            borderRadius,
            borderTopRightRadius,
            borderTopLeftRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius
        }}
        >
            <LinearGradient
                colors={colors}
                style={{
                    height: '100%',
                    justifyContent: 'center',
                    borderRadius,
                    borderTopRightRadius,
                    borderTopLeftRadius,
                    borderBottomRightRadius,
                    borderBottomLeftRadius
                }}
            >
                <Text style={[styles.text, { fontSize }]}>{title}</Text>
            </LinearGradient>
        </TouchableHighlight>
    </View>
}

const styles = StyleSheet.create({
    buttonBase: {
        backgroundColor: 'gray',
        height: 50,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        textShadowColor: 'gray',
        textShadowOffset: {
            width: 0,
            height: 1
        },
        textShadowRadius: 5
    }
})