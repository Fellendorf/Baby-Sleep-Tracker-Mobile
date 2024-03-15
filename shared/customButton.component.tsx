import { DimensionValue, StyleSheet, Text, TouchableHighlight, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    title: string,
    onPress: () => void,
    color?: string,
    buttonStyle?: Pick<ViewStyle, 'width' | 'backgroundColor' | 'borderRadius'>,
    gradientColors?: string[]
}
// TODO: add gradient
// TODO: add ability to provide custom styles using props
export default function CustomButton({ title, onPress, buttonStyle, gradientColors }: Props) {
    const colors = gradientColors && gradientColors.length > 1
        ? gradientColors
        : Array(2).fill(buttonStyle?.backgroundColor || styles.buttonBase.backgroundColor)
    const borderRadius = buttonStyle?.borderRadius || 0; 

    return <View style={[styles.buttonBase, buttonStyle]}>
        <TouchableHighlight onPress={onPress} style={{
                width: '100%',
                justifyContent: 'center',
                borderRadius
            }}
        >
            <LinearGradient
                colors={colors}
                style={{
                    height: '100%', 
                    justifyContent: 'center',
                    borderRadius
                }}
            >
                <Text style={styles.text}>{title}</Text>
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
        fontSize: 18,
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