import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import Header  from './src/Header';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.Container}>
        <StatusBar backgroundColor='#0e806a'/>
        <Header />
        <View style={{ flex:1, backgroundColor:'#fff'}}>
        <Navigation />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
