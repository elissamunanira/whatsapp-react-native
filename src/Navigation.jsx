import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chat from './screens/Chat';
import Call from './screens/Call';
import Community from './screens/Community';
import Status from './screens/Status';

const  Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (
      <Tab.Navigator
      initialRouteName='Chat'
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
        },
        tabBarLabelStyle:{
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#0e806a',
        }
      }}
      >
        <Tab.Screen
        name = 'Community'
        component={Community}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account-group'size={24} color = {color} />
          ),
          tabBarLabelStyle: styles.tabBarLabel
        }}
        />
        <Tab.Screen
        name = 'Chat'
        component={Chat}
        />
        <Tab.Screen
        name = 'Status'
        component={Status}
        />
        <Tab.Screen
        name = 'Call'
        component={Call}
        />
      </Tab.Navigator>
    );
  };
  
  export default Navigation;
  
  const styles = StyleSheet.create({
   tabBarLabel:{
    display: 'none',
    // backgroundColor:'red'
   }
  });
