import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Post({ name }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {name} </Text>
            <Image source={require('../assets/cook.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 1,
        height: 700,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    image: {
        width: 400,
        height: 400,
    }
});