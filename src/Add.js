import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from './style';

export default function Add({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Image style={styles.image} source={require('../assets/cook.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
});
