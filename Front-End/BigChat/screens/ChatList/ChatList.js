import React from 'react';
import { View, TouchableOpacity,ListView, StyleSheet, Text, Image } from 'react-native';
import Row from './Row';
import data from './data';
// const util = require ('util');



export default class ChatList extends React.Component {
    static navigationOptions ={
        header: null,
    };
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }
    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}>Add</Text>
                    <Text style={styles.toolbarTitle}>All Chats</Text>
                    <Text style={styles.toolbarButton}>Like</Text>
                </View>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={ (data)=> this._renderRow(data,navigate)}
                    //renderRow={(data) => <Row {...data} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
               
            </View>
        );
    }

    _renderRow(data,navigate) {
        return (
          <TouchableOpacity onPress = {
            ()=>navigate("Chat",{})
       }>
            <Row {...data} />
          </TouchableOpacity>
        );
      }
}



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
      //paddingHorizontal:10
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 25,
      flex:1                //Step 3
  }
  });

//export default ChatList;