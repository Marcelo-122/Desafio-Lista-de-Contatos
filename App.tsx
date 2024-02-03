import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './zall/screens/AddScreen';
import EditScreen from './zall/screens/EditScreen';
import DetailsScreen from './zall/screens/DetailsScreen';
import ContactScreen from './zall/screens/ContactScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contatos">
        <Stack.Screen name="Contatos" component={ContactScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Adicionar" component={AddScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
