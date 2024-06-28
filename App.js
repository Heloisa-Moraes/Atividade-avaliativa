import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Views/HomeScreen';
import Equipe from './Views/Equipe';
import Contato from './Views/Contato';
import Blog from './Views/Blog';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Sobre nós"
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50', // cor ativa das abas
        tabBarInactiveTintColor: '#666666', // cor inativa das abas
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E0E0E0' }, // cor de fundo da barra de navegação
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, // estilo do texto das abas
      }}
    >
      <Tab.Screen
        name="Sobre nós"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipe"
        component={Equipe}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={size} />
          ),
        }}
      />
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
