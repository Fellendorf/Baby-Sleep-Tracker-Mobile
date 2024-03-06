import { View, Button, StyleSheet } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import CustomButton from "../../shared/CustomButton.js";


export function DateTimePicker({date, setDate}) {
    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            display: 'spinner',
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return <View style={styles.view}>
        <CustomButton title="Change time" onPress={showTimepicker} width="48%"/>
        <CustomButton title="Change date" onPress={showDatepicker} width="48%"/>
    </View>
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch'
    }
})