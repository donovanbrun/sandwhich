import { View, Text, ScrollView, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from './style';
import Post from './Post';

export default function Explore({ navigation }) {

    let posts = []
    for (let i = 0; i < 100; i++) {
        posts.push(<Post name={"Post " + i} />)
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {posts}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 500,
        height: 500,
        marginBottom: 20
    }
});