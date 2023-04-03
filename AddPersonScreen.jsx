import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';

export function AddPersonScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [deathDate, setDeathDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [bio, setBio] = useState('');

  const persons = route.params.persons;

  const handleSave = () => {
    const floatLat = parseFloat(lat)
    const floatLon = parseFloat(lon)
    const birthDateTimestamp = birthDate.getDate()
    const deathDateTimestamp = deathDate.getDate()
    const person = {
      name,
      birthDate: birthDateTimestamp,
      deathDate: deathDateTimestamp,
      lat: floatLat,
      lon: floatLon,
      bio,
    };
    
    navigation.navigate('HomeScreen', { persons: [...persons, person] });
  };

  const handleBirthDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
  };

  const handleDeathDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || deathDate;
    setShowDatePicker(false);
    setDeathDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#AAA"
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Bio"
            placeholderTextColor="#AAA"
            onChangeText={setBio}
            value={bio}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dates</Text>
        <View style={styles.dateInputContainer}>
          <Button
            title="Birth Date"
            onPress={() => setShowDatePicker(true)}
            style={styles.dateButton}
          />
          <Button
            title="Death Date"
            onPress={() => setShowDatePicker(true)}
            style={styles.dateButton}
          />
          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="default"
              onChange={handleBirthDateChange}
            />
          )}
          {showDatePicker && (
            <DateTimePicker
              value={deathDate}
              mode="date"
              display="default"
              onChange={handleDeathDateChange}
            />
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            placeholderTextColor="#AAA"
            onChangeText={setLat}
            value={lat}
          />
          <TextInput
            style={styles.input}
            placeholder="Longitude"
            placeholderTextColor="#AAA"
            onChangeText={setLon}
            value={lon}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} style={styles.saveButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  dateButton: {
    flex: 1,
    backgroundColor: '#96b4fa',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#96b4fa',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
