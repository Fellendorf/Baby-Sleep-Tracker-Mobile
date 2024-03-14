import React from 'react';
import { View, StyleSheet } from "react-native";
import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import CustomButton from "../../shared/customButton.component";
import { colors } from "../../constants";

type Props = {
    date: Date,
    setDate: React.Dispatch<React.SetStateAction<Date>>
}
type Mode = 'date' | 'time';

export function DateTimePicker({date, setDate}: Props) {
    const onChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (selectedDate instanceof Date) {
            setDate(selectedDate);
        }
        throw new Error('Selected Date is undefined');
    };

    const showMode = (currentMode: Mode) => {
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
        <CustomButton title="Change time" onPress={showTimepicker} width="48%" color={colors.button.turquoise}/>
        <CustomButton title="Change date" onPress={showDatepicker} width="48%" color={colors.button.turquoise}/>
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