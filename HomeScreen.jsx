import React, { useState, useRef, useEffect } from 'react';
import { Fab } from './Fab';
import { View, StyleSheet } from 'react-native';
import { YaMap, Marker } from 'react-native-yamap';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsBlock: {
        position: 'absolute',
        right: 20,
        bottom: 40,
    },
    buttonWrapper: {
        marginTop: 8,
    },
    icon: {
        width: 24,
        height: 24,
    },
    button: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 2,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 12,
    },
    addressWrapper: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 20,
    },
    address: {
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 2,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 12,
    },
    addressText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

YaMap.init('2618cdf0-f608-435d-9d49-bd3775ea3476');

const initialState = {
    persons: [],
    polyline: [],
    night: true,
    address: undefined,
};

export function HomeScreen({ route, navigation }) {
    const [state, setState] = useState(initialState);
    const map = useRef(null);

    const [persons, setPersons] = useState(route.params.persons);

    useEffect(() => {
        setPersons(route.params.persons);
    }, [route.params.persons]);

    //   useEffect(() => {
    //     setState((prevState) => ({ ...prevState, persons: route.params.persons }));
    //   }, [route.params.persons]);

    const handleMarkerPress = (person) => {
        navigation.navigate('PersonDetailScreen', { person });
    };

    return (
        <View style={styles.container}>
            <YaMap ref={map} style={styles.container} showUserPosition nightMode={state.night}>
                {persons.map((person) => (
                    <Marker
                        key={person.name}
                        scale={2}
                        point={{ lat: person.lat, lon: person.lon }}
                        onPress={() => handleMarkerPress(person)}
                        // source={require('./gravestone.png')}
                    />
                ))}
            </YaMap>

            <Fab onPress={() => navigation.navigate('AddPersonScreen', { persons: state.persons })} />
        </View>
    );
}
