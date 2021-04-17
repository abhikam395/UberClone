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
import Icon from 'react-native-vector-icons/AntDesign';;

export default class CodeConfirmScreen extends Component{

    constructor(){
        super();
        this.state = {
            counter: 2
        }
        this.onBackPress = this.onBackPress.bind(this);
        this.navToSocialMediaScreen = this.navToSocialMediaScreen.bind(this);
        this.navToCodeConfirmScreen = this.navToCodeConfirmScreen.bind(this);
        this.navToHomeScreen = this.navToHomeScreen.bind(this);
        this.interval = null;
    }

    componentDidMount(){
        this.startCounter();
    }

    startCounter(){
        // let context = this;
        let {counter} = this.state;
        console.log(counter);
        this.interval = setInterval(() => {
            this.setState({counter: --counter})
            if(counter === 0){
                clearInterval(this.interval);
                this.setState({counter: 10})
            }
        }, 1000);
    }

    navToSocialMediaScreen(){
        let {navigation} = this.props;
        navigation.navigate('SocialMedia');
    }

    navToCodeConfirmScreen(){
        let {navigation} = this.props;
        navigation.navigate('CodeConfirm');
    }

    navToHomeScreen(){
        let {navigation} = this.props;
        navigation.navigate('Home');
    }

    onBackPress(){
        let {navigation} = this.props;
        navigation.goBack();
    }

    resetCounter(){
        this.startCounter();
        this.setState({counter: 10});
    }

    render(){
        let {counter} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#000'/>
                <TouchableOpacity onPress={this.onBackPress}>
                    <Icon name="arrowleft" size={26} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Enter the 4-digit code sent to you at 3453543453</Text>          
                <Text style={styles.counter}>
                    Resend code in <Text style={styles.timer}>00:{counter}</Text>
                </Text>
                {counter === 0 && 
                    <TouchableOpacity 
                        style={styles.resend} 
                        onPress={() => this.resetCounter()}>
                            <Text style={styles.resendButton}>Resend</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this.navToHomeScreen}>
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
        marginVertical: 10
    },
    icon: {
        fontSize: 30,
        color: '#23527C'
    },
    counter: {
        color: 'grey',
        marginTop: 30
    },
    timer: {
        color: 'red'
    },
    label: {
        marginLeft: 20
    },
    googleicon: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    buttonContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        height: 50,
        marginTop: 'auto',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tint: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    resendButton: {
        height: 30,
        backgroundColor: 'blue',
        width: 100,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    resend: {
        marginTop: 20
    }
})