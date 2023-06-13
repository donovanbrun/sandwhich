import { View, Text, Image, TextInput, Button, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from './style';

export default function Add() {

    let layers = ['Bread', 'Cheese', 'Tomato', 'Lettuce', 'Bread'];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={globalStyles.text}>Name</Text>
                <TextInput editable style={styles.input} placeholder="Title" />
            </View>
            <View>
                <Text style={globalStyles.text}>Description</Text>
                <TextInput editable style={styles.input} placeholder="Title" />
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/cook.png')} />
                <Button title='Add images' />
            </View>
            <Text style={styles.title}>Layers</Text>
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
                <View style={styles.layer}>
                    <Text style={styles.layerText}> + </Text>
                </View>
            </View>
            <Button title='Create' />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 10,
        width: 200,
        color: '#fff',
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
