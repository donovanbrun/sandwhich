import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './src/Nav';
import Add from './src/Add';
import Profile from './src/Profile';
import Explore from './src/Explore';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen
                name="Add"
                component={Add}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Nav />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
    }
});
