import { React, useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons';


const Header = () => {
  const [searchMode,setSearchMode] = useState('false');
  const [searchQuery,setSearchQuery] = useState('');
  const handleSearchIconClick = () => {
    setSearchMode(!searchMode);
  }
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
          <TextInput
          style = {styles.searchInput} placeholder = "search..." value = {searchQuery} onchangeText = {text =>setSearchQuery(text)} autoFocus = {true} />
        )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#0e806a',
        paddingTop: 60,
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
      }
    });