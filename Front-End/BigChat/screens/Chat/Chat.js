import React, {Component} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from './backend';
//import ChatList from '../ChatList'
// const util = require ('util');

import{
    View,
    Text,
    StyleSheet,
    Image,
    Button,
} from 'react-native';


export default class Chat extends Component{
    static navigationOptions  = {
        //tabBarVisible = false,
       header : null
    };
    state = {
        messages: []
    };

    componentWillMount() {

    }
    render(){
        var {navigate} = this.props.navigation;
        var {goBack} = this.props.navigation;

        return(
            <View style = {{flex: 1}} >
                <View style={styles.toolbar}>
                    <Text onPress = {
                         ()=>goBack()
                    }
                    style={styles.toolbarButton} >Back</Text>

                    <Text style={styles.toolbarTitle}>Chat</Text>

                    <Text onPress = {
                         ()=>navigate("Profile",{})
                    }
                    style={styles.toolbarButton} >Profile</Text>
                </View>
                <GiftedChat
                messages = {this.state.messages}
                onSend = {(messages)=>{
                    Backend.sendMessage(message);
                }}
                user = {{_id: Backend.getUid(),
                    name: this.props.name,}}/>
                   
            </View>
            );
    }

    componentDidMount() {
        Backend.loadMessages((message) => {
          this.setState((previousState) => {
            return {
              messages: GiftedChat.append(previousState.messages, message),
            };
          });
        });
      }

    componentWillUnmount() {
        Backend.closeChat();
    }
}





// Chat.defaultProps = {
//     name: 'John Smith',
//   };
  
// Chat.propTypes = {
//     name: React.PropTypes.string,
//   };
// class LogoTitle extends React.Component {
//     render() {
//       return (
//         <View style = {{flex: 1}} >
        
        
//         </View>

//       );
//     }
//   }
       
// const NavBar = createStackNavigator({
//     ChatList:{screen:ChatList},
//     Chat:{screen:Chat},
//   });
  

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
      toolbar:{
        backgroundColor:'#00bfff',
        paddingTop:40,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
  toolbarButton:{
      width: 50,            //Step 2
      color:'#fff',
      textAlign:'center',
      fontSize: 16,
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 25,
      flex:1                //Step 3
  }
  });
