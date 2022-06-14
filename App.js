import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {


  return (
    <View style={styles.sectionContainer}>
    <Text style={{textAlign: 'center'}}>Hello world how are you?</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

