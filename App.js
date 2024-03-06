import { StyleSheet, View } from 'react-native';
import { Checkpoint } from './screens/Checkpoint/Checkpoint.js';

export default function App() {

  return <View style={styles.container}>
    <Checkpoint />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
