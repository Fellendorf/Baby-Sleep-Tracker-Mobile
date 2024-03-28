import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { DateTimePicker } from "./dateTimePickers.component";
import { DateView } from "./dateView.component";
import { NavigationButtons } from "../../shared/navigationButtons.component";
import { CustomButton } from "../../shared/customButton.component";
import { colors } from "../../constants";

const imagePath = '../../assets/images/checkpoint.background.dark.png';

export function Checkpoint({ navigation, route }: NativeStackScreenProps<ParamListBase>) {
    const [date, setDate] = useState(new Date());
    // Fall asleep = F, Wake up = W
    const [type, setType] = useState('F');

    const submit = () => { console.log('TEMP') }


    return <View style={styles.container}>
        <Image source={require(imagePath)} style={styles.image} />
        {
            type === 'F' ?
                <Text style={styles.type}>Fell asleep at</Text> :
                <Text style={styles.type}>Woke up at</Text>
        }
        <View style={styles.subContainer}>
            <DateView date={date} textColor={styles.type.color} />
            <DateTimePicker date={date} setDate={setDate} />
            <View style={{ paddingTop: 10 }}>
                <CustomButton
                    title="Submit"
                    gradientColors={[colors.button.blue, colors.button.darkBlue]}
                    onPress={submit}
                    buttonStyle={styles.button}
                    fontSize={24}
                />
            </View>
        </View>
        <NavigationButtons navigation={navigation} route={route} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.dark
    },
    subContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80,
    },
    image: {
        width: '100%'
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: colors.text.light
    },
    button: {
        height: 60,
        borderRadius: 25
    }
})