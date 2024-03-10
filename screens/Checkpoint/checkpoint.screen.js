import { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DateTimePicker } from "./dateTimePickers.component";
import CustomButton from "../../shared/customButton.component";
import DateView from "./dateView.component";


export function Checkpoint() {
    const [date, setDate] = useState(new Date());
    // Fall asleep = F, Wake up = W
    const [type, setType] = useState('F');

    const submit = () => { console.log('TEMP') }

    return <LinearGradient colors={gradients[type]} style={styles.gradient}>
        <View style={styles.container}>
            {
                type === 'F' ?
                    <Text style={[styles.type, styles.typeDark]}>Fell asleep at</Text> :
                    <Text style={[styles.type, styles.typeLight]}>Woke up at</Text>
            }
            <StatusBar style="auto" />
            <DateView date={date} />
            <DateTimePicker date={date} setDate={setDate} />
            <CustomButton title="Submit" color='#576ea1' onPress={submit} />
        </View>
    </LinearGradient >

}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    type: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    typeDark: {
        color: '#161616'
    },
    typeLight: {
        color: '#e6e6e6'
    }
})

const gradients = {
    F: ['#393972', '#ffffff'],
    W: ['#61a3da', '#ffffff']
}