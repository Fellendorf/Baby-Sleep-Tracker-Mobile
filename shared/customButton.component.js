import { StyleSheet, Text, TouchableHighlight, View } from "react-native";


export default function CustomButton({ title, onPress, width, color }) {
    return <TouchableHighlight onPress={onPress} style={[styles.buttonRadius, {width}]}>
        <View style={[styles.button, styles.buttonRadius, {backgroundColor: color || '#2c3750'}]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    buttonRadius: {
        borderRadius: 8,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})