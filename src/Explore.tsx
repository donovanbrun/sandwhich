import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Post from './Post';
import { data } from './data';
import { useEffect, useState } from 'react';
import { getSandwiches } from './services/SandwichService';
import Sandwich from './model/Sandwich';

export default function Explore() {

    const [sandwiches, setSandwiches]: [Sandwich[], any] = useState([]);

    /*
    <FlatList
        data={sandwiches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post item={item} key={item.id} />}
        contentContainerStyle={styles.list}
    />
    */

    useEffect(() => {
        // getSandwiches()
        //     .then(res => {
        //         setData(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        setSandwiches(data.sandwiches);
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                sandwiches.map(s => {
                    return (
                        <Post item={s} key={s.id} />
                    );
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flexGrow: 1,
    },
});