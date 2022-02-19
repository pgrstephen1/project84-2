import React, {Components} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Components{
    renderItem=({item:post})=>{
        return<PostCard post={post} navigation={this.props.navigation}/>
    };
render(){
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.cardContainer}>
                <View style ={StyleSheet.authorContainer}>
                    <View style={StyleSheet.authorImageContainer}>
                        <Image
                        source={require("../assets/profile_img.png")}
                        style={StyleSheet.profileImage}
                        ></Image>
                    </View>
                    <View style={StyleSheet.authorNameContainer}>
                        <Text style={StyleSheet.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={StyleSheet.postImage}/>
                <View style={StyleSheet.captionContainer}>
                    <Text style={StyleSheet.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={StyleSheet.actionContainer}>
                    <View style={StyleSheet.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={StyleSheet.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container:{

    },
    cardContainer:{

    },
    authorContainer:{

    },
    authorImageContainer:{

    },
    profileImage:{

    },
    authorNameContainer:{

    },
    authorNameText:{

    },
    postImage:{

    },
    captionContainer:{

    },
    captionText:{

    },
    actionContainer:{

    },
    likeButton:{

    },
})