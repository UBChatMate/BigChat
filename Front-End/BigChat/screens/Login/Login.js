import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.loginContainer}>
            
        </View>
       <View style={styles.formContainer}>
           <LoginForm />
       </View>
       
 
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});

export default Login;