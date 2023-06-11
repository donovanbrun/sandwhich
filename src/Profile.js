import { View, Text } from 'react-native';
import { globalStyles } from './style';

export default function Profile({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Profile</Text>
        </View>
    );
}