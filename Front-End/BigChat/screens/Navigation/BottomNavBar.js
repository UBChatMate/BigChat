import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator, createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import ChatList from '../ChatList/ChatList';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';


export default BottomNavBar = createBottomTabNavigator({
    ChatList:{
      screen:ChatList,
      tabBarOptions:{
        tabBarLabel: 'Chats',
        tabBarIcon:()=> (
          <Ionicons name = "chat" size={24}/>
        )
      }
    },
  
    Contacts:{
        screen:Contact,
        tabBarOptions:{
        tabBarLabel: 'Contacts',
        tabBarIcon:()=> (
          <Ionicons name = "user-friends" size={24}/>
        )
      }
    },
      
  
      Profile:{
        screen:Profile,
        tabBarOptions:{
        tabBarLabel: 'Profile',
        tabBarIcon:()=> (
          <Ionicons name = "profile"  size={24}/>
        )
      }
    },
      //NavBar:NavBar,
});