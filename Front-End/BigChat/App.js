/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';
import Login from './screens/Login/Login';
import Chat from './screens/Chat/Chat';
import ChatList from './screens/ChatList/ChatList';
import {StackNavigator, createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Contact from './screens/Contact/Contact.js';
import Profile from './screens/Profile/Profile';
import MyProfile from './screens/Profile/MyProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {BottomNavBar} from './screens/Navigation/BottomNavBar';


export default class App extends Component {
  render() {
    return (
       <BottomNavBar/>
    );
  }
}

const ChatNav = createStackNavigator({
      ChatList:ChatList,
      Chat:{screen:Chat},
      Profile:Profile
});

ChatNav.navigationOptions=({navigation})=>{
  if(navigation.state.index!=0){
    return{
      tabBarVisible : false,
    };
  }
  return{
    tabBarVisible : true,
  };
}

const ContactNav = createStackNavigator({
  Contacts:Contact,
  Profile:Profile,
  Chat:Chat,
});



const BottomNavBar = createBottomTabNavigator({
      Chats:{
        screen:ChatNav,
        tabBarOptions:{
        tabBarLabel: 'Chats',
        tabBarIcon:()=> (
          <Ionicons name = "chats" size={24}/>
        )
      }
    },
    
      Contacts:{
          screen:ContactNav,
          tabBarOptions:{
          tabBarLabel: 'Contacts',
          tabBarIcon:()=> (
            <Ionicons name = "user-friends" size={24}/>
          )
        }
      },
        
    
        Me:{
          screen:MyProfile,
          tabBarOptions:{
          tabBarLabel: 'Me',
          tabBarIcon:()=> (
            <Ionicons name = "profile"  size={24}/>
          )
        }
      },
});




const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  toolbar:{
    backgroundColor:'#00bfff',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
},
toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center',
    fontSize: 15,
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 20,
    flex:1                //Step 3
}
});

//AppRegistry.registerComponent('DemoLogin', () => DemoLogin);
//export default App;