import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title='em breve'
      onPress={() => props.navigation.navigate("About")}
      />
    </View>
  );
}

function AboutScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
      <Button 
      title='SAC'
      onPress={() => props.navigation.navigate("SAC")}
      />
    </View>
  );
}

function SacScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SAC</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sobre nós" component={AboutScreen} />
        <Drawer.Screen name="SAC" component={SacScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;