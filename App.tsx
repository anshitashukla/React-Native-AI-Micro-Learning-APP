import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import your screen types if they exist
import {MainLayout} from './src/screens';

// Define the stack's parameter list for type safety
type RootStackParamList = {
  Dashboard: undefined; // No params for the "Dashboard" screen
};

// Create a typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={MainLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
