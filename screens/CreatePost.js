import React, {Components} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreatePost extends Components{
    constructor(){
    super();
    this.state ={
        previewImage : 'image_1',
    }
}

    render(){
        let previewImage ={
            image_1:require('image_1.jpg'),
            image_2:require('image_2.jpg'),
            image_3:require('image_3.jpg'),
            image_4:require('image_4.jpg'),
            image_5:require('image_5.jpg'),
        };
        return(
       <View style={style.container}>
           <SafeAreaView style={styles.droidSafeArea}/>
           <View style={styles.appTitle}>
               <View style={styles.appIcon}>
                   <Image
                        source={require("../assets/logo.png")}>

                        </Image>
               </View>
               <View style={styles.appTitleTextContainer}>
                   <Text style={styles.appTitleText}>New Post</Text>
               </View>
           </View>
           <View style={styles.fieldsContainer}>
               <ScrollView>
                   <Image
                        source={preview_images[this.state.previewImage]}
                        style={styles.previewImage}>
                        </Image>
                        <View style={{height:
                                RFValue(this.state.dropdownHeight)}}>
                                    <DropDownPicker
                                        items={[
                                            {label:"Image 1", value:"image_1"},
                                            {label:"Image 2", value:"image_2"},
                                            {label:"Image 3", value:"image_3"},
                                            {label:"Image 4", value:"image_4"},
                                            {label:"Image 5", value:"image_5"},
                                            {label:"Image 6", value:"image_6"},
                                            {label:"Image 7", value:"image_7"},
                                        ]}
                                        defaultValue={this.state.previewImage}
                                        containerStyle={{
                                            height:40,
                                            borderRadius:20,
                                            marginBottom:10
                                        }}
                                        onOpen={()=> {
                                            this.setState({dropDownHeight:170});
                                        }}
                                        onClose={()=>{
                                            this.setState({dropdownHeight:40});
                                        }}
                                        style={{backgroundColor:"transparent"}}
                                        itemStyle={{
                                            justifyContent:"flex-start"
                                        }}
                                        dropDownStyle={{backgroundColor:"#2a2a2a"}}
                                        labelStyle={{
                                            color:"white"
                                        }}
                                        arrowStyle={{
                                            color:"white"
                                        }}
                                        onChangeItem={item =>
                                            this.setState({
                                                previewImage: item.value
                                            })
                                        }
                                    />
                                </View>
                                <TextInput
                                    style={styles.inputFont}
                                    onChangeText={caption => this.setState({caption})}
                                        placeholder={"Caption"}
                                        numberOfLines={4}
                                        placeholderTextColor={"white"}
                                        />
                                    </ScrollView>
                                    </View>
                                    <View style={{flex:0.08}}/>
                                    </View>
        );}}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#15193c',
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: 'row',
    },
    appIcon: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: 'center',
    },
    appTitleText: {
      color: 'white',
      fontSize: RFValue(28),
      fontFamily: 'Bubblegum-Sans',
    },
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: '93%',
      height: RFValue(250),
      alignSelf: 'center',
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: 'contain',
    },
    inputFont: {
      height: RFValue(40),
      borderColor: 'white',
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: 'white',
      fontFamily: 'Bubblegum-Sans',
    },
    inputFontExtra: {
      marginTop: RFValue(15),
    },
    inputTextBig: {
      textAlignVertical: 'top',
      padding: RFValue(5),
    }
  })