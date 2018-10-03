/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';
// import Login from './src/components/Login/Login.js';
// import ScrollList from './src/components/ScrollListExample/ScrollListExample.js'

// export default class DemoLogin extends Component {
//   render() {
//     return (
//       <ScrollList/>
//     );
//   }
// }

// AppRegistry.registerComponent('DemoLogin', () => DemoLogin);


// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import Login from './src/components/Login/Login.js';
// import ScrollList from './src/components/ScrollListExample/ScrollListExample.js'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Messages"
//           onPress={() => this.props.navigation.navigate('Messages')}
//         />
//         <Button
//           title="Go to Login"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null // Will hide header for Home only
//     }
//     },
//     Details: DetailsScreen,
//     Messages: ScrollList,
//     Login: Login,
//   },
//   {
//     // Hides Header globally
//     navigationOptions: {
//       header: null,
//     }
//    },
//   {
//     initialRouteName: 'Home',
//   },

// );

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }





import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './src/components/LoginFireBase/Loading'
import SignUp from './src/components/LoginFireBase/SignUp'
import Login from './src/components/LoginFireBase/Login'
import Main from './src/components/LoginFireBase/Main'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App