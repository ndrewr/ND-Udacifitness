import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import AddEntry from './components/AddEntry'

const styles = StyleSheet.create({
 container: {
   flex: 1,
   // display: 'flex',

   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Udacitfitness!</Text>
        <AddEntry />
      </View>
    );
  }
}
