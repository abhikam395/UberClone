import React, {Component} from 'react';
import { 
    SafeAreaView, 
    Text, 
    View, 
    StatusBar, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    TextInput,
} 
from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import flagIcon from './../assets/images/flag.jpeg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GoogleIcon from './../assets/images/google-icon.png';

export default class SocialMediaScreen extends Component{

    constructor(){
        super();
        this.onBackPress = this.onBackPress.bind(this);
        this.navToSocialMediaScreen = this.navToSocialMediaScreen.bind(this);
    }

    navToSocialMediaScreen(){
        let {navigation} = this.props;
        navigation.navigate('SocialMedia');
    }

    onBackPress(){
        let {navigation} = this.props;
        navigation.goBack();
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#000'/>
                <TouchableOpacity onPress={this.onBackPress}>
                    <Icon name="arrowleft" size={26} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Choose an account</Text>
                <TouchableOpacity>
                    <View style={Object.assign({...styles.row}, {marginTop: 30})}>
                    <AntDesign name="facebook-square" style={styles.icon}/>
                    <Text style={styles.label}>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.row}>
                    <Image source={GoogleIcon} style={styles.googleicon}/>
                    <Text style={styles.label}>Google</Text>
                    </View>
                </TouchableOpacity>
                
                <Text style={styles.message}>
                    By continuing you may receive an SMS for verification. Message and 
                    data rates may apply.
                </Text>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: '600',
        color: '#000'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    icon: {
        fontSize: 30,
        color: '#23527C'
    },
    message: {
        color: 'grey',
        marginTop: 30
    },
    label: {
        marginLeft: 20
    },
    googleicon: {
        height: 30,
        width: 30,
        borderRadius: 15
    }
})