import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { CustomButton } from "./customButton.component";
import { colors, screenNames } from "../constants";

export function NavigationButtons({navigation, route}: NativeStackScreenProps<ParamListBase>) {
    return <View style={styles.container}>
        <CustomButton 
            title={screenNames.settings} 
            onPress={() => navigation.navigate(screenNames.settings)} 
            buttonStyle={{...styles.button, ...styles.buttonLeft}} 
            gradientColors={gradientColors}
        />
        <CustomButton 
            title={screenNames.checkpoint} 
            onPress={() => navigation.navigate(screenNames.checkpoint)}
            buttonStyle={styles.button} 
            gradientColors={gradientColors}
        />
        <CustomButton 
            title={screenNames.settings} 
            onPress={() => navigation.navigate(screenNames.settings)}
            buttonStyle={{...styles.button, ...styles.buttonRight}} 
            gradientColors={gradientColors}
        />
    </View>
}

const gradientColors = [colors.button.pink, colors.button.darkPink];

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch'
    },
    button: {
        width: '38%',
        height: 40
    },
    buttonLeft: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: '30%'
    },
    buttonRight: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: '30%'
    }
})