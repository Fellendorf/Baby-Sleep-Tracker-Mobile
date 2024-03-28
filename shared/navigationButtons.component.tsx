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
            fontSize={15}
        />
        <CustomButton 
            title={screenNames.checkpoint} 
            onPress={() => navigation.navigate(screenNames.checkpoint)}
            buttonStyle={styles.button} 
            gradientColors={gradientColors}
            fontSize={15}
        />
        <CustomButton 
            title={screenNames.settings} 
            onPress={() => navigation.navigate(screenNames.settings)}
            buttonStyle={{...styles.button, ...styles.buttonRight}} 
            gradientColors={gradientColors}
            fontSize={15}
        />
    </View>
}

const gradientColors = [colors.button.pink, colors.button.darkPink];

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        position: 'absolute',
        bottom: 5,
    },
    button: {
        width: '34%',
        height: 40
    },
    buttonLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: "1%",
        width: '32%'
    },
    buttonRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginLeft: "1%",
        width: '32%'
    }
})