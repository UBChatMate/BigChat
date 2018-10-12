import React from 'react';
import { View, ListView, StyleSheet, Text, Image } from 'react-native';
import Footer from './Footer';



export default class MyProfile extends React.Component {
    static navigationOptions ={
        header: null,
    };
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    name: "Bill Gates",
                    picture: "https://randomuser.me/api/portraits/men/4.jpg",
                    googleAccount: "BillGates@google.com",
                    UserId: "123456",
                }
            ]),
        };
    }

    _renderRow(rowData) {
        return (
            <View style = {{flex:1}}>
                    <Image source={{ uri: rowData.picture }} style={styles.profilephoto}
                    resizeMode="stretch" />
                    <Text style={styles.username}> {rowData.name} </Text>
                <View style={styles.row}>
                    <Image source={{ uri: rowData.picture }} style={styles.photo} />
                    <Text style={styles.text}> Friends </Text>
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: rowData.picture }} style={styles.photo} />
                    <Text style={styles.text}> All Chats </Text>
                </View>
            </View>
        );
    }
    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Profile</Text>
                </View>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderFooter={() => <Footer />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    username:{
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    profilephoto:{
        alignSelf: 'center',
        height: 200,
        width: 200,
        borderWidth: 1,
        borderRadius: 100,
    },
    row: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    toolbar:{
        backgroundColor:'#00bfff',
        paddingTop:40,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        flex: 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center',
        fontSize: 16,
    },
});

//export default Profile;