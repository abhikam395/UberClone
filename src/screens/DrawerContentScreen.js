import React, {Component} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const options = [
    {id: 1, name: 'YourTrips'},
    {id: 2, name: 'Help'},
    {id: 3, name: 'Payment'},
    {id: 4, name: 'Settings'},
]

export default class DrawerContentScreen extends Component{

    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    onItemClick(name){
        let {navigation} = this.props;
        navigation.navigate(name);
    }

    renderItem({item}){

        return (
            <TouchableOpacity onPress={() => this.onItemClick(item.name)}>
                <View style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <FlatList
                    data={options}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                    />
                <SafeAreaView style={styles.bottom}>
                    <Text style={styles.label}>Legal</Text>
                    <Text style={styles.version}>v1.0</Text>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'black',
        height: 180
    },
    bottom: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey'
    },
    label: {
        color: 'black',
    },
    version: {
        marginLeft: 'auto'
    },
    item: {
        height: 50,
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 16
    }
})