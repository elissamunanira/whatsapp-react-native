import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Community = () => {
  return (
    <View style={styles.Container}>
      <Text>Community</Text>
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});