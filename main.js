import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button text='delete' onClick={() => console.log('hello')} variant='delete'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
