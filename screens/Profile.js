import React, {Components} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Profile extends Components{
    render(){
        return(
        <View style={{flex: 1,
            justifyContent: "center",
            alignItems: "center"}}>
        <Text>Profile</Text>
        </View>
        );
    }
}