import { useState } from "react";
import { Button, View, Text, StatusBar } from "react-native";
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
        <Button style={styles.button} title="Submit"/>
    </View>
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        // line-height: 1;
        borderRadius: '500px'
        // transition-property: background-color,border-color,color,box-shadow,filter;
        // transition-duration: .3s;
        // border: 1px solid transparent;
        // letter-spacing: 2px;
        // min-width: 160px;
        // text-transform: uppercase;
        // white-space: normal;
        // font-weight: 700;
        // text-align: center;
        // padding: 16px 14px 18px;
        // color: #fff;
        // background-color: #15883e;
        // height: 48px;
        // :hover{
        //     background-color: #1db954;
        // }
    
    }
}