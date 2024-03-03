import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function App() {
  const [date, setDate] = useState(new Date());

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      onChange: (event, selectedDate) => {
        console.log(selectedDate.toLocaleString())
        setDate(selectedDate,  showTimepicker);
      },
      value: date,
      mode: 'date',
    });
  };

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      onChange: (event, selectedDate) => {
        setDate(selectedDate);
      },
      value: date,
      mode: 'time',
      display:'spinner',
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!!</Text>
      {/* <Button
        title="Add checkpoint"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
      <Button onPress={showDatepicker} title="Add checkpoint" />
      <Text>selected: {date.toLocaleString()}</Text>
      {/* <RNDateTimePicker
          display='spinner'
          value={date}
          mode='time'
          is24Hour={true }
          onChange={onChange}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
