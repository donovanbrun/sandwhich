import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from './style';
import { StyleSheet } from 'react-native';
import { data } from './data';
import Sandwich from './model/Sandwich';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

    const navigation = useNavigation();

    const user = data.users[0];
    const sandwiches = data.sandwiches.filter(s => s.userId === user.id);

    const posts = sandwiches.map(s => {
        return (
            <TouchableWithoutFeedback onPress={() => handler(s)}>
                <View style={styles.post} key={s.id}>
                    <Image source={s.imageUrl} style={styles.postImage} />
                </View>
            </TouchableWithoutFeedback>
        );
    });

    let handler = (sandwich: Sandwich) => {
        navigation.navigate('PostFull', { sandwich });
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileHeader}>
                <Image style={styles.image} source={require('../assets/cook.png')} />
                <Text style={styles.name}> {user.name} </Text>
                <Text style={styles.bio}> {user.bio} </Text>
            </View>
            <View style={styles.profileStats}>
                <View style={styles.stat}>
                    <Text style={styles.statText}> {sandwiches.length} </Text>
                    <Text style={styles.statText}> Posts </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statText}> 0 </Text>
                    <Text style={styles.statText}> Followers </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statText}> 0 </Text>
                    <Text style={styles.statText}> Follow </Text>
                </View>
            </View>
            <View style={styles.postsContainer}>
                <View style={styles.posts}>
                    {posts}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexGrow: 1,
        alignItems: 'center',
        gap: 20,
    },
    profileHeader: {
        alignItems: 'center',
        gap: 10,
        padding: 20,
    },
    profileStats: {
        flexDirection: 'row',
        gap: 20,
    },
    stat: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    statText: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 30,
    },
    name: {
        color: '#fff',
        fontSize: 30,
    },
    bio: {
        color: '#fff',
        fontSize: 20,
    },
    postsContainer: {
        alignItems: 'center',
        gap: 10,
    },
    posts: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    post: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
    },
    postImage: {
        width: '100%',
        height: '100%',
    }
});