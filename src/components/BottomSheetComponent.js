import React,{Component} from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class BottomSheetComponent extends Component{

    constructor(){
        super();
        this.enableGPS = this.enableGPS.bind(this);
    }

    enableGPS(){
        console.log('click')
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        })
          .then((data) => {
            ToastAndroid.show('Already Enabled', 1000)
          })
          .catch((err) => {
            console.log(err)
          });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    To find your pickup location automatically, turn on location services
                </Text>
                <TouchableOpacity onPress={this.enableGPS}>
                    <Text style={styles.tint}>Turn on location</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 200,
        backgroundColor: '#1976d2',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    label: {
        fontSize: 20,
        color: 'white',
    },
    tint: {
        color: 'white',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    }
})