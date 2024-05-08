import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Call = () => {
  return (
    <View style={styles.container}>
      <Text>Call</Text>
    </View>
  )
}

export default Call

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});