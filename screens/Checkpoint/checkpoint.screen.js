import { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { DateTimePicker } from "./dateTimePickers.component";
import CustomButton from "../../shared/customButton.component";
import DateView from "./dateView.component";


export function Checkpoint() {
    const [date, setDate] = useState(new Date());
    // Fall asleep = F, Wake up = W
    const [type, setType] = useState('F');

    const submit = () => {console.log('TEMP')}

    return <View style={styles.container}>
        <StatusBar style="auto" />
        <DateView date={date}/>
        <DateTimePicker date={date} setDate={setDate} />
        <CustomButton title="Submit" color='#576ea1' onPress={submit}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20
    }
})