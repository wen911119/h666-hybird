import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

// const HOST = 'http://10.100.0.223:3000';
// const HOST = 'https://qc-live-conference-dev.quancheng-ec.com';
const HOST = 'https://h666-demo.ruiyun2015.com';

import H666Container from './h666Container';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="h666Container"
          component={H666Container}
          initialParams={{
            host: HOST,
            page: 'index',
            headerConfig: {
              title: 'h666演示',
              bgColor: '#f8584f',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
