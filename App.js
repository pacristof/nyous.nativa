import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomNavigator } from '@react-navigation/bottom-tabs';
import contatos from './Pages/Contatos';
import camera from './Pages/Camera';
import location from './Pages/Location';

const Tab = createBottomNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Contato" component= {contatos} />
        <Tab.Screen name = "Camera" component= {camera} />
        <Tab.Screen name = "Location" component= {location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }

  export default App;