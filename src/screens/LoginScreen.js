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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class LoginScreen extends Component{

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
                <Text style={styles.title}>Enter your mobile number</Text>
                <View style={styles.row}>
                    <Image source={flagIcon} style={styles.flagIcon}></Image>
                    <MaterialIcons name="expand-more" style={styles.dropIcon} />
                    <Text style={styles.code}>+91</Text>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input} 
                            placeholder="0132456439" 
                            placeholderTextColor="grey"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={this.navToSocialMediaScreen}>
                    <View style={Object.assign({...styles.row}, {marginVertical: 0})}>
                        <Text style={styles.link}>Or connect with social</Text>
                        <Icon name="arrowright" size={20} color="#2196f3" style={{marginLeft: 10}}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.message}>
                    By continuing you may receive an SMS for verification. Message and 
                    data rates may apply.
                </Text>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this.onClick}>
                   <Text style={styles.tint}>Next</Text>
               </TouchableOpacity>
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
        marginVertical: 30,
    },
    flagIcon: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    },
    dropIcon: {
        marginHorizontal: 10,
    },
    code: {
        color: '#000',
        fontSize: 16,
    },
    input: {
        fontSize: 16,
    },
    inputContainer: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        flex: 1,
    },
    link: {
        color: '#2196f3',
        fontSize: 16,
        fontWeight: 'bold'
    },
    message: {
        marginTop: 'auto',
        color: 'grey'
    },
    buttonContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        height: 50,
        marginTop: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tint: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
})