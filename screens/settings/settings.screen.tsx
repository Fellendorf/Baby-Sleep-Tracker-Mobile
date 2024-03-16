import { View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { NavigationButtons } from "../../shared/navigationButtons.component";
import { colors } from "../../constants";

export function Settings({navigation, route}: NativeStackScreenProps<ParamListBase>) {
    return <View style={styles.container}>
            <Text style={{color: 'white'}}>Settings</Text>
            <NavigationButtons navigation={navigation} route={route}/>
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.dark
    },
})