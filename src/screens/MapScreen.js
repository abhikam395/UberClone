import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';

export default class MapScreen extends Component{

    constructor(){
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer(){
        let {navigation} = this.props;
        navigation.openDrawer();
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                 <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 30.3165,
                    longitude: 78.0322,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
                <TouchableOpacity style={styles.icon} onPress={this.openDrawer}>
                    <Icon name="menu" style={styles.menuIcon}/>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    icon: {
        position: 'absolute',
        width: 50,
        height: 50,
        color: 'red',
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 30,
        marginLeft: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcon: {
        fontSize: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})