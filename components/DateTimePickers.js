import { View, Button } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";


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

    return <View>
        <Button onPress={showTimepicker} title="Change time" />
        <Button onPress={showDatepicker} title="Change date" />
    </View>
}