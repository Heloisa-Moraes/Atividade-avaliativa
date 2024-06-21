import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Views/HomeScreen'; // Certifique-se de ajustar os caminhos conforme necessário
import SettingsScreen from './Views/SettingsScreen';
import Contato from './Views/Contato';
import Blog from './Views/Blog';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sobre nós" component={HomeScreen} />
      <Tab.Screen name="Equipe" component={SettingsScreen} />
      <Tab.Screen name="Contato" component={Contato} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
