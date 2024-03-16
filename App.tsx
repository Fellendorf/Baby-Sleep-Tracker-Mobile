import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from './screens/settings/settings.screen';
import { Checkpoint } from './screens/checkpoint/checkpoint.screen';
import { screenNames } from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.container}>
    <StatusBar /*style="auto"*/ />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={screenNames.checkpoint}
          component={Checkpoint}
        />
        <Stack.Screen
          name={screenNames.settings}
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
