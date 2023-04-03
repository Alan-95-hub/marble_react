import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddPersonScreen } from './AddPersonScreen';
import { HomeScreen } from './HomeScreen';
import { PersonProvider } from './PersonContext';
import { PersonDetailScreen } from './PersonDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PersonProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{ persons: [] }} />
          <Stack.Screen name="AddPersonScreen" component={AddPersonScreen} />
          <Stack.Screen name="PersonDetailScreen" component={PersonDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersonProvider>
  );
}
