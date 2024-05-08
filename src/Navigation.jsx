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
        tabBarLabelStyle: {
          backgroundColor: '#0e806a',
        }
      }}
      >
        <Tab.Screen
        name = 'Community'
        component={Community}
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
      //   <Stack.Navigator
      //     screenOptions={{
      //       header: ({ scene, previous, navigation }) => (
      //         <View style={[styles.headerContainer, { backgroundColor: '#0e806a' }]}>
      //           <Header />
      //         </View>
      //       ),
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         fontSize: 20,
      //       },
      //       headerTitleAlign: 'center',
      //     }}>
      //     <Stack.Screen name="Chat" component={Chat} />
      //     <Stack.Screen name="Call" component={Call} />
      //     <Stack.Screen name="Community" component={Community} />
      //     <Stack.Screen name="Status" component={Status} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  };
  
  export default Navigation;
  
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
