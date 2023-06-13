import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Nav';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
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
