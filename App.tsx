import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostListScreen from './src/PostListScreen';
import PostDetailsScreen from './src/PostDetailsScreen';
import Login from './src/Login';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PostList" component={PostListScreen} />
          <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
