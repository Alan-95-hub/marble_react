import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function PersonDetailScreen({ route, navigation }) {
    const person = route.params.person;

    const handlePressClose = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={handlePressClose}>
                <Ionicons name="close" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.name}>{person?.name || 'Unknown'}</Text>
            <Text style={styles.bio}>{person?.bio || 'No bio available'}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Birth Date:</Text>
                <Text style={styles.info}>{person?.birthDate ? new Date(person.birthDate).toDateString() : 'Unknown'}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Death Date:</Text>
                <Text style={styles.info}>{person?.deathDate ? new Date(person.deathDate).toDateString() : 'Unknown'}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Latitude:</Text>
                <Text style={styles.info}>{person?.lat || 'Unknown'}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Longitude:</Text>
                <Text style={styles.info}>{person?.lon || 'Unknown'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#34343C',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#ccc',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    closeButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    name: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 20,
    },
    infoContainer: {
        color: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    info: {
        color: '#FFF',
        fontSize: 16,
    },
});
