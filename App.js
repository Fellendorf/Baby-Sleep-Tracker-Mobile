import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Checkpoint } from './screens/Checkpoint/checkpoint.screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.container}>
    <StatusBar style="auto" />
    <Checkpoint />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
