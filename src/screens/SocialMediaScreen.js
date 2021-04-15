import React, {Component} from 'react';
import { 
    SafeAreaView, 
    Text, 
    View, 
    StatusBar, 
    StyleSheet, 
} 
from 'react-native';

export default class SocialMediaScreen extends Component{

    // constructor(){
    //     super();
    //     this.onBackPress = this.onBackPress.bind(this);
    // }

    // onBackPress(){
    //     let {navigation} = this.props;
    //     navigation.goBack();
    // }

    render(){
        return (
            <SafeAreaView>
                <Text>SocialMediaScreen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
});