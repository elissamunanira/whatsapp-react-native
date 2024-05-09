import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import DATA from '../data/Chatdata';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Chat = () => {
  const [CharacterData, setChatData] = useState(DATA); 

  useEffect(() => {
    setChatData(DATA);
  })
  return (
    <View style = {styles.Container}>
      <FlatList 
       data = {chatData}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item})  =>(
        <View style={styles.chatContainer}>
          <Image source={item.photos} style={styles.image} />

        </View>
       )}
      />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});