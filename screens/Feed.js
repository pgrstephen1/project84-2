import React, {Components} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PostCard from './PostCard';

export default class Feed extends Components{
    renderItem = ({ item: post }) => {
        return <PostCard post={post} />;
      };
    render(){
        return(
            <View style ={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appIcon}>
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectogram</Text>
                </View>
                 <View style={styles.cardContainer}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}/>
            </View>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"? statusbar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(38),
    },
    cardContainer:{
        flex:0.85
    }
})