import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import DATA from '../data/chatdata';
import { Feather } from 'react-native-vector-icons';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Chat = () => {
  const [chatData, setChatData] = useState(DATA); 

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
          <View style={styles.chatContent}>
            <View style={styles.chatHeader}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatTime}>{item.time}</Text>
            </View>
            <View style={styles.messages}>
              <Text style={styles.chatMessage}
              numberOfLines={1}>
                {item.lastMessage}
              </Text>
              {item.totalUnread > 0 && (
                <View style={styles.unreadContainer}>
                  <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
       )}
      />
      <TouchableOpacity style={styles.chatIcon}>
          <Feather  name='message-square' size={32} color ='#fff'style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 16,
  },
  chatContainer: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#128C7E',
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatContent:{
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom: 13
  },
  chatHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 4
  },
  chatName:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatTime:{
    fontSize:12,
    color: '#A0A09E',
  },
  messages:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatMessage: {
    fontSize: 14,
    color: '#A0A09E',
    width: '90%',
  },
  unreadContainer: {
    height:20,
    width:25,
    borderRadius:50,
    backgroundColor :'#25D366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalUnread:{
    fontSize:16,
    color: '#fff',
    fontWeight: '600'
  },
  chatIcon: {
    backgroundColor: '#25D366',
    position: 'relative',
    height:60,
    width:60,
    borderRadius: 50,
    marginBottom: 40,
    marginLeft: 320,
  },
  icon:{
    alignItems: 'center',
    position: 'relative',
    marginLeft: 15,
    marginTop: 15,
  }
});