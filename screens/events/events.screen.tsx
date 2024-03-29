import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { NavigationButtons } from "../../shared/navigationButtons.component";
import { colors } from "../../constants";
import { IEvent, Store } from "../../services/store";


const mockData: Array<IEvent> = [
    { type: 'F', date: new Date('2024-03-29T00:00:00').getTime() },
    { type: 'W', date: new Date('2024-03-29T09:00:00').getTime() },
    { type: 'F', date: new Date('2024-03-29T11:00:00').getTime() },
    { type: 'W', date: new Date('2024-03-29T11:40:00').getTime() },
];

Store.storeEvents(mockData, Alert.alert)


export function Events({ navigation, route }: NativeStackScreenProps<ParamListBase>) {
    //TODO: change setEvents type
    const [events, setEvents]: [IEvent[], Dispatch<SetStateAction<never[]>>] = useState([]);

    useEffect(() => {
        Store.getEvents(Alert.alert).then(data => setEvents(data));
    });


    return <View style={styles.container}>
        <Text style={{ color: 'white' }}>Data</Text>
        {
            events.map(({date, type}) => <Text style={{ color: 'white' }} key={date}>{new Date(date).toLocaleString()}:{type}</Text>)
        }
        <NavigationButtons navigation={navigation} route={route} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.dark
    },
})