import React, {Component} from 'react';
import { 
    SafeAreaView, 
    Text, 
    View, 
    StatusBar, 
    StyleSheet, 
    Image, 
    Button, 
    TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from './../../src/assets/images/safe_drive.png';
import Icon from 'react-native-vector-icons/AntDesign'

export default class SpashScreen extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        let {navigation} = this.props;
        navigation.navigate('Login');
    }

    render(){
        return (
           <LinearGradient 
                colors={['#2196f3', '#1e88e5', '#1976d2']} 
                style={styles.container}>
                <StatusBar backgroundColor='#1976d2'/>
                <Text style={styles.title}>Uber</Text>
                <Image source={logo} style={styles.icon}/>
                <Text style={styles.label}>Move with Safety</Text>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this.onClick}>
                    <View style={styles.button}>
                    <Text style={styles.tint}>Get Started</Text>
                    <Icon 
                        name="arrowright" 
                        size={20} 
                        color="#fff" 
                        style={styles.buttonIcon} 
                        />
                   </View>
               </TouchableOpacity>
           </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976d2',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        marginTop: 50,
        fontSize: 28,
        fontWeight: 'bold',
    },
    icon: {
        height: 200,
        marginTop: 100,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
    },
    buttonContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        height: 50,
        marginTop: 'auto'
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tint: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 'auto'
    },
    buttonIcon: {
        marginLeft: 'auto',
        marginRight: 20,
    }
})