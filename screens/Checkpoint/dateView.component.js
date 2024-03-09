import { View, Text, StyleSheet } from "react-native";
import Utils from "../../shared/utils";


export default function DateView({ date }) {
    const dateString = date.toLocaleString();
    // 01.02.2003, 01:23:45 -> 01:23
    const time = Utils.extractByRegex(dateString, /, (.*):/);
    // 01.02.2003, 01:23:45 -> 01.02.2003
    const dayMonthYear = Utils.extractByRegex(dateString, /(.*),/);


    return <View style={styles.container}>
        <Text style={[styles.date, styles.time]}>{time}</Text>
        <Text style={[styles.date, styles.dayMonthYear]}>{dayMonthYear}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    date: {
        fontFamily: 'BebasNeue-Regular'
    },
    time: {
        fontSize: 150
    },
    dayMonthYear: {
        fontSize: 75
    }
})