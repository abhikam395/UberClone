import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from './MapScreen';
import DrawerContentScreen from './DrawerContentScreen';
import YourTripsScreen from './YourTripsScreen';
import SettingScreen from './SettingScreen';
import PaymentScreen from './PaymentScreen';
import HelpScreen from './HelpScreen';
import BottomSheetComponent from '../components/BottomSheetComponent';

const Drawer = createDrawerNavigator();

export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Drawer.Navigator 
                    initialRouteName="Home" 
                    drawerContent={(props) => <DrawerContentScreen {...props} />}
                    drawerStyle={{width: '80%'}}>
                    <Drawer.Screen name="Home" component={MapScreen} />
                    <Drawer.Screen name="Help" component={HelpScreen} />
                    <Drawer.Screen name="Payment" component={PaymentScreen} />
                    <Drawer.Screen name="YourTrips" component={YourTripsScreen} />
                    <Drawer.Screen name="Settings" component={SettingScreen} />
                </Drawer.Navigator>
                <BottomSheetComponent />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})
