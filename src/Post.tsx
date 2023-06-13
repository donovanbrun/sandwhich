import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sandwich from './model/Sandwich';
import { Dimensions } from 'react-native';
import { data } from './data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Post({ item }) {

    const navigation = useNavigation();
    const sandwich = item as Sandwich;

    const user = data.users.find(u => u.id === sandwich.userId);

    let handler = () => {
        navigation.navigate('PostFull', { sandwich });
    }

    return (
        <TouchableWithoutFeedback onPress={handler} style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}> {sandwich.name} </Text>
                <Image source={sandwich.imageUrl} style={styles.image} />
                <Text style={styles.text}> Par {user?.name} </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 1,
        height: windowHeight * 0.85,
        width: windowWidth,
        flex: 1,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20
    },
    title: {
        color: 'white',
        fontSize: 30,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        width: '90%',
        height: 300,
    }
});