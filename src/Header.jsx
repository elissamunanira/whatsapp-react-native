import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons';


const Header = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>WhatsApp</Text>
            <View style={styles.iconContainer}>
                <Feather  name='camera' size={20} color ='#fff'style={styles.icon}/>
                <Fontisto name = 'search'size={20} color ='#fff'style={styles.icon}/>
                <MaterialCommunityIcons name ='dots-vertical'size ={21} color='#fff'style={styles.icon} />
            </View>
        </View>
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
      }
    });