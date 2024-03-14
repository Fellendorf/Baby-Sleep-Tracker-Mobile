import { DimensionValue, StyleSheet, Text, TouchableHighlight, View } from "react-native";

type Props = {
    title: string,
    onPress: () => void,
    width?: DimensionValue,
    color?: string
}
// TODO: add gradient
// TODO: add ability to provide custom styles using props
export default function CustomButton({ title, onPress, width, color }: Props) {
    return <TouchableHighlight onPress={onPress} style={[styles.buttonRadius, {width}]}>
        <View style={[styles.button, styles.buttonRadius, {backgroundColor: color || '#2c3750'}]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    buttonRadius: {
        borderRadius: 30,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15,
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