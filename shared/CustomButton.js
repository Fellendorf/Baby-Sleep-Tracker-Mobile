import { StyleSheet, Text, TouchableHighlight, View } from "react-native";


export default function CustomButton({ title, onPress, width }) {
    return <TouchableHighlight onPress={onPress} style={[styles.buttonRadius, {width}]} underlayColor='#455782'>
        <View style={[styles.button, styles.buttonRadius]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    buttonRadius: {
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#2c3750',
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