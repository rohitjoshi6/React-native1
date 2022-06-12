import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import ReactImg from './assets/logo-og.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Image source={ReactImg} style={{width: 200, height: 200}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
