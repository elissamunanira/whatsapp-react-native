import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Status = () => {
  return (
    <View style={styles.Container}>
      <Text>Status</Text>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});