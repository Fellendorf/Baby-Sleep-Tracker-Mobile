import { useState } from "react";
import { Button, View, Text, StatusBar, StyleSheet } from "react-native";
import { DateTimePicker } from "./DateTimePickers";


export function Checkpoint() {
    const [date, setDate] = useState(new Date());
    // Fall asleep = F, Wake up = W
    const [event, setEvent] = useState('F');

    const displayDate = date => date.toLocaleString().replace(/,.*/, '');
    const displayTime = date => date.toLocaleString().replace(/.*,/, '');

    return <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.date}>{displayDate(date)}</Text>
        <Text style={styles.date}>{displayTime(date)}</Text>
        <DateTimePicker date={date} setDate={setDate}/>
        <Button title="Submit"/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    date: {
        fontSize: 50,
    }
})