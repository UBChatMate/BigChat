
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class App extends Component {

  state = {
    messages: [
        {
            "name":"Bob Start",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob",
            "email": "bob@bob.bob"
        },
        {
            "name":"Bob Final",
            "email": "bob@bob.bob"
        },
    ]
  }

  render() {
    return (
        
      <View style={styles.container} >
        <Text style={styles.h1text}>
          Bobs
        </Text>
          <FlatList
          data={this.state.messages}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
        <Text style={styles.h2text}>
          Bottom Buttons
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h1text: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    // justifyContent: 'center',
    paddingTop: 15,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'blue'
  }
  
});