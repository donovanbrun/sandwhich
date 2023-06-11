import { StyleSheet, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Add from './Add';
import Profile from './Profile';
import Explore from './Explore';

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}