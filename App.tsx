import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PolyfillCrypto from 'react-native-webview-crypto';

import Home from './src/screens/Home';
import Publication from './src/screens/Publication';
import Post from './src/screens/Post';

const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name='Home' component={Home} />
          <AppStack.Screen name='Publication' component={Publication} />
          <AppStack.Screen name='Post' component={Post} />
        </AppStack.Navigator>
      </NavigationContainer>
      <PolyfillCrypto />
    </SafeAreaProvider>
  );
};

export default App;
