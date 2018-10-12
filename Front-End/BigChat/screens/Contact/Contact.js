import React, {Component} from 'react';
import { View, TouchableOpacity, ListView, StyleSheet, Text,Image } from 'react-native';
import Row from './Row';
import SectionHeader from './SectionHeader';
import data from './data';
import Header from './Header'




export default class Contact extends React.Component {
  static navigationOptions ={
    header: null,
};
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
          getSectionData,
          getRowData,
        });
        const { dataBlob, sectionIds, rowIds } = this.formatData(data);   
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        };
    }
    formatData(data) {
      // We're sorting by alphabetically so we need the alphabet
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
      // Need somewhere to store our data
      const dataBlob = {};
      const sectionIds = [];
      const rowIds = [];
  
      // Each section is going to represent a letter in the alphabet so we loop over the alphabet
      for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
        // Get the character we're currently looking for
        const currentChar = alphabet[sectionId];
  
        // Get users whose first name starts with the current letter
        const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
  
        // If there are any users who have a first name starting with the current letter then we'll
        // add a new section otherwise we just skip over it
        if (users.length > 0) {
          // Add a section id to our array so the listview knows that we've got a new section
          sectionIds.push(sectionId);
  
          // Store any data we would want to display in the section header. In our case we want to show
          // the current character
          dataBlob[sectionId] = { character: currentChar };
  
          // Setup a new array that we can store the row ids for this section
          rowIds.push([]);
  
          // Loop over the valid users for this section
          for (let i = 0; i < users.length; i++) {
            // Create a unique row id for the data blob that the listview can use for reference
            const rowId = `${sectionId}:${i}`;
  
            // Push the row id to the row ids array. This is what listview will reference to pull
            // data from our data blob
            rowIds[rowIds.length - 1].push(rowId);
  
            // Store the data we care about for this row
            dataBlob[rowId] = users[i];
          }
        }
      }
  
      return { dataBlob, sectionIds, rowIds };
    }
    render() {
      var {navigate} = this.props.navigation;

        return (
          <View style = {{flex: 1}} >
          <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}>Add</Text>
                    <Text style={styles.toolbarTitle}>Contact</Text>
                    <Text style={styles.toolbarButton}>Like</Text>
                </View>
            <ListView
            dataSource = {this.state.dataSource}
            renderRow={ (data)=> this._renderRow(data,navigate)}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            renderHeader={() => <Header />}
            renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
            />
          </View>
        );

    }
    _renderRow(data,navigate) {
      return (
        <TouchableOpacity onPress = {
          ()=>navigate("Profile",{})
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
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 25,
      flex:1                //Step 3
  }
  });

//export default Contact;
