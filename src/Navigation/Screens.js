import React from 'react';
import HomeScreen from '../Components/Index/HomeScreen';
import RegisterScreen from '../Components/Index/RegisterScreen';
import ProductsServices from '../Components/DashBoard/Services/ProductsServices';
import ItemDetail from '../Components/DashBoard/Services/ItemDetails';
import Index from '../Components/DashBoard/AddToCard/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RightButton from './Buttons';
const Stack = createStackNavigator();
const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={ProductsServices}
          options={{
            title: 'Products',
            headerRight: () => <RightButton />,
          }}
        />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddToCard"
          component={Index}
          options={{title: 'Total Items'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Screens;
