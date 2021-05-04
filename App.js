import React from 'react';
import _ from 'lodash';
import {screens} from './AwesomeProject/node_modules/unicorn-demo-app';
import {NavigationContainer} from './AwesomeProject/node_modules/@react-navigation/native';
import {createStackNavigator} from './AwesomeProject/node_modules/@react-navigation/stack';
import MainScreen from './AwesomeProject/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen}/>
        {_.map(screens, (screen, key) => {
          return <Stack.Screen key={key} name={key.replace('Screen', '')} component={screen}/>;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
