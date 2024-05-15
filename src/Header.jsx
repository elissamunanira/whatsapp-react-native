import { React, useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons';

import DATA from '../src/data/chatdata';


const Header = () => {
  const [searchMode,setSearchMode] = useState('false');
  const [searchQuery,setSearchQuery] = useState(' ');
  const [searchResults, setSearchResults] = useState([]);

  //function to filter chat data based on query
  const searchChatData = () => {
    const results = DATA.filter(chat => chat.name.toLowerCase().includes(searchQuery.toLowerCase()));
    searchResults(results);
  }
  const handleSearchIconClick = () => {
    setSearchMode(!searchMode);
    if (!searchMode) {
      setSearchResults([]);
    }
  };
  return (
    <View style={styles.Container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>WhatsApp</Text>
            <View style={styles.iconContainer}>
                <Feather  name='camera' size={20} color ='#fff'style={styles.icon}/>
                <TouchableOpacity  onPress={handleSearchIconClick}>
                <Fontisto name = 'search'size={20} color ='#fff'style={styles.icon}/>
                </TouchableOpacity>
                <MaterialCommunityIcons name ='dots-vertical'size ={21} color='#fff'style={styles.icon} />
            </View>
        </View>
        {searchMode && (
          <View>
          {/* <Text> */}
          <TextInput
          style = {styles.searchInput} placeholder = "search..." value = {searchQuery} onchangeText = {text =>setSearchQuery(text)} autoFocus = {true} 
          onSubmitEditing={searchChatData}
          />

          {/* Rendering search results */}
          {searchResults.map(chat => (
            <View key = {chat.id}>
              <Text style = {styles.chatName}>chat.name</Text>
              <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
            </View>
          ))}
          {/* </Text> */}
          </View>
        )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#0e806a',
        paddingTop: 40,
        paddingBottom: 8,
        width: '100%',
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16, 
      },
      headerText: {
        fontSize: 20,
        fontWeight: '500', 
        color: '#fff',
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginLeft: 20, 
      },
      searchInput: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginTop: 10,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
      },
      chatName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      lastMessage: {
        fontSize: 16,
        marginTop: 5,
      },
    });