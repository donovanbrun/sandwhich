import { useEffect } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

type RouteSandwich = {
    item: any,
}

export default function PostFull() {

    const navigation = useNavigation();
    const route = useRoute<RouteProp<RouteSandwich, 'item'>>();
    const item = route.params;
    const sandwich = item?.sandwich;

    // useEffect(() => {
    //     navigation.setOptions({ title: `${item.name} par ${item.user}` });
    // }, []);

    const layers = ['pain', 'viande', 'salade', 'tomate', 'oignon', 'mayonaise', 'pain'];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}> {sandwich.name} </Text>
            <Text style={styles.text}> Par {sandwich.user} </Text>
            <Image source={sandwich.imageUrl} style={styles.image} />
            <Text style={styles.text}> {sandwich.description} </Text>
            <Text style={styles.text}> Composition : </Text>
            <View style={styles.layers}>
                {
                    layers.map((layer, index) => {
                        return (
                            <View key={index} style={styles.layer}>
                                <Text style={styles.layerText}> {layer} </Text>
                            </View>
                        );
                    })
                }
            </View>
            <Button onPress={() => navigation.goBack()} title='Back' />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexGrow: 1,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        width: 400,
        height: 400,
    },
    layers: {
        flex: 1,
        flexDirection: 'column',
        gap: 2,
        width: '90%',
    },
    layer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
    },
    layerText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    }
});